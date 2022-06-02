// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "../lib/Babylonian.sol";
import "../owner/Operator.sol";
import "../utils/ContractGuard.sol";
import "../interfaces/IBasisAsset.sol";
import "../interfaces/IOracle.sol";
import "../interfaces/IBoardroom.sol";
import "../interfaces/IRegulationStats.sol";

/*

$$$$$$$\   $$$$$$\  $$\      $$\ $$$$$$$\                                                            
$$  __$$\ $$  __$$\ $$$\    $$$ |$$  __$$\                                                           
$$ |  $$ |$$ /  $$ |$$$$\  $$$$ |$$ |  $$ |    $$$$$$\$$$$\   $$$$$$\  $$$$$$$\   $$$$$$\  $$\   $$\ 
$$$$$$$\ |$$ |  $$ |$$\$$\$$ $$ |$$$$$$$\ |    $$  _$$  _$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |
$$  __$$\ $$ |  $$ |$$ \$$$  $$ |$$  __$$\     $$ / $$ / $$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |\$  /$$ |$$ |  $$ |    $$ | $$ | $$ |$$ |  $$ |$$ |  $$ |$$   ____|$$ |  $$ |
$$$$$$$  | $$$$$$  |$$ | \_/ $$ |$$$$$$$  |$$\ $$ | $$ | $$ |\$$$$$$  |$$ |  $$ |\$$$$$$$\ \$$$$$$$ |
\_______/  \______/ \__|     \__|\_______/ \__|\__| \__| \__| \______/ \__|  \__| \_______| \____$$ |
                                                                                           $$\   $$ |
                                                                                           \$$$$$$  |
    http://bomb.money                                                                      \______/ 
*/
contract TreasuryBUSD is ContractGuard, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;

    /* ========= CONSTANT VARIABLES ======== */

    uint256 public constant PERIOD = 8 hours;

    /* ========== STATE VARIABLES ========== */

    // governance
    address public operator;

    // flags
    bool public initialized = false;

    // epoch
    uint256 public startTime;
    uint256 public epoch = 0;
    uint256 public epochSupplyContractionLeft = 0;

    // exclusions from total supply
    address[] public excludedFromTotalSupply = [
        address(0x859379D1DAaD77bCd78701808Bfb58A5F5b92E1A) // TokenGenesisPool
    ];

    // core components
    address public token;
    address public bond;
    address public share;

    address public boardroom;
    address public tokenOracle;

    uint256 public boardroomWithdrawFee;
    uint256 public boardroomStakeFee;
    // price
    uint256 public tokenPriceOne;
    uint256 public tokenPriceCeiling;

    uint256 public seigniorageSaved;

    uint256[] public supplyTiers;
    uint256[] public maxExpansionTiers;

    uint256 public maxSupplyExpansionPercent;
    uint256 public bondDepletionFloorPercent;
    uint256 public seigniorageExpansionFloorPercent;
    uint256 public maxSupplyContractionPercent;
    uint256 public maxDebtRatioPercent;

    // 28 first epochs (1 week) with 4.5% expansion regardless of BOMB price
    uint256 public bootstrapEpochs;
    uint256 public bootstrapSupplyExpansionPercent;

    /* =================== Added variables =================== */
    uint256 public previousEpochTokenPrice;
    uint256 public maxDiscountRate; // when purchasing bond
    uint256 public maxPremiumRate; // when redeeming bond
    uint256 public discountPercent;
    uint256 public premiumThreshold;
    uint256 public premiumPercent;
    uint256 public mintingFactorForPayingDebt; // print extra BOMB during debt phase
  
    // 45% for Stakers in boardroom (THIS)
    // 45% for DAO fund
    // 2% for DEV fund
    // 8% for INSURANCE fund
    address public daoFund;
    uint256 public daoFundSharedPercent;

    address public devFund;
    uint256 public devFundSharedPercent;

    address public insuranceFund;
    uint256 public insuranceFundSharedPercent;

    address public regulationStats;


    /* =================== Events =================== */

    event Initialized(address indexed executor, uint256 at);
    event BurnedBonds(address indexed from, uint256 bondAmount);
    event RedeemedBonds(address indexed from, uint256 tokenAmount, uint256 bondAmount);
    event BoughtBonds(address indexed from, uint256 tokenAmount, uint256 bondAmount);
    event TreasuryFunded(uint256 timestamp, uint256 seigniorage);
    event BoardroomFunded(uint256 timestamp, uint256 seigniorage);
    event DaoFundFunded(uint256 timestamp, uint256 seigniorage);
    event DevFundFunded(uint256 timestamp, uint256 seigniorage);
    event InsuranceFundFunded(uint256 timestamp, uint256 seigniorage);
    event Seigniorage(uint256 epoch, uint256 twap, uint256 expansion);

    /* =================== Modifier =================== */

    modifier onlyOperator() {
        require(operator == msg.sender, "Treasury: caller is not the operator");
        _;
    }

    modifier checkCondition() {
        require(now >= startTime, "Treasury: not started yet");

        _;
    }

    modifier checkEpoch() {
        require(now >= nextEpochPoint(), "Treasury: not opened yet");

        _;

        epoch = epoch.add(1);
        epochSupplyContractionLeft = (getTokenPrice() > tokenPriceCeiling) ? 0 : getTokenCirculatingSupply().mul(maxSupplyContractionPercent).div(10000);
    }

    modifier checkOperator() {
        require(
            IBasisAsset(token).operator() == address(this) &&
                IBasisAsset(bond).operator() == address(this) &&
             //   IBasisAsset(share).operator() == address(this) &&
                Operator(boardroom).operator() == address(this),
            "Treasury: need more permission"
        );

        _;
    }

    modifier notInitialized() {
        require(!initialized, "Treasury: already initialized");

        _;
    }

    /* ========== VIEW FUNCTIONS ========== */

    function isInitialized() public view returns (bool) {
        return initialized;
    }

    // epoch
    function nextEpochPoint() public view returns (uint256) {
        return startTime.add(epoch.mul(PERIOD));
    }

    // oracle
    function getTokenPrice() public view returns (uint256 tokenPrice) {
        try IOracle(tokenOracle).consult(token, 1e18) returns (uint144 price) {
            return uint256(price);
        } catch {
            revert("Treasury: failed to consult BOMB price from the oracle");
        }
    }

    function getTokenUpdatedPrice() public view returns (uint256 _tokenPrice) {
        try IOracle(tokenOracle).twap(token, 1e18) returns (uint144 price) {
            return uint256(price);
        } catch {
            revert("Treasury: failed to consult BOMB price from the oracle");
        }
    }

    // budget
    function getReserve() public view returns (uint256) {
        return seigniorageSaved;
    }

    function getBurnableTokenLeft() public view returns (uint256 _burnableTokenLeft) {
        uint256 _tokenPrice = getTokenPrice();
        if (_tokenPrice <= tokenPriceOne) {
            uint256 _tokenSupply = getTokenCirculatingSupply();
            uint256 _bondMaxSupply = _tokenSupply.mul(maxDebtRatioPercent).div(10000);
            uint256 _bondSupply = IERC20(bond).totalSupply();
            if (_bondMaxSupply > _bondSupply) {
                uint256 _maxMintableBond = _bondMaxSupply.sub(_bondSupply);
                uint256 _maxBurnableToken = _maxMintableBond.mul(_tokenPrice).div(1e18);
                _burnableTokenLeft = Math.min(epochSupplyContractionLeft, _maxBurnableToken);
            }
        }
    }

    function getRedeemableBonds() public view returns (uint256 _redeemableBonds) {
        uint256 _tokenPrice = getTokenPrice();
        if (_tokenPrice > tokenPriceCeiling) {
            uint256 _totalToken = IERC20(token).balanceOf(address(this));
            uint256 _rate = getBondPremiumRate();
            if (_rate > 0) {
                _redeemableBonds = _totalToken.mul(1e18).div(_rate);
            }
        }
    }

    function getBondDiscountRate() public view returns (uint256 _rate) {
        uint256 _tokenPrice = getTokenPrice();
        if (_tokenPrice <= tokenPriceOne) {
            if (discountPercent == 0) {
                // no discount
                _rate = tokenPriceOne;
            } else {
                uint256 _bondAmount = tokenPriceOne.mul(1e18).div(_tokenPrice); // to burn 1 BOMB
                uint256 _discountAmount = _bondAmount.sub(tokenPriceOne).mul(discountPercent).div(10000);
                _rate = tokenPriceOne.add(_discountAmount);
                if (maxDiscountRate > 0 && _rate > maxDiscountRate) {
                    _rate = maxDiscountRate;
                }
            }
        }
    }

    function getBondPremiumRate() public view returns (uint256 _rate) {
        uint256 _tokenPrice = getTokenPrice();
        if (_tokenPrice > tokenPriceCeiling) {
            uint256 _tokenPricePremiumThreshold = tokenPriceOne.mul(premiumThreshold).div(100);
            if (_tokenPrice >= _tokenPricePremiumThreshold) {
                //Price > 1.10
                uint256 _premiumAmount = _tokenPrice.sub(tokenPriceOne).mul(premiumPercent).div(10000);
                _rate = tokenPriceOne.add(_premiumAmount);
                if (maxPremiumRate > 0 && _rate > maxPremiumRate) {
                    _rate = maxPremiumRate;
                }
            } else {
                // no premium bonus
                _rate = tokenPriceOne;
            }
        }
    }

    /* ========== GOVERNANCE ========== */

    function initialize(
        address _token,
        address _bond,
        address _share,
        address _tokenOracle,
        address _boardroom,
        uint256 _startTime
    ) public notInitialized {
        token = _token;
        bond = _bond;
        share = _share;
        tokenOracle = _tokenOracle;
        boardroom = _boardroom;
        startTime = _startTime;

        tokenPriceOne = 10**18; // This is to allow a PEG of 10,000 BOMB per BTC
        tokenPriceCeiling = tokenPriceOne.mul(1001).div(1000);

        // Dynamic max expansion percent
        supplyTiers = [0 ether, 100000 ether, 250000 ether, 500000 ether, 1000000 ether, 5000000 ether];
        maxExpansionTiers = [150, 150, 150, 150, 150, 150];

        maxSupplyExpansionPercent = 350; // Upto 4.5% supply for expansion

        bondDepletionFloorPercent = 10000; // 100% of Bond supply for depletion floor
        seigniorageExpansionFloorPercent = 3500; // At least 35% of expansion reserved for boardroom
        maxSupplyContractionPercent = 300; // Upto 3.0% supply for contraction (to burn BOMB and mint tBOND)
        maxDebtRatioPercent = 3500; // Upto 35% supply of tBOND to purchase

        premiumThreshold = 105;
        premiumPercent = 7000;

        // First 21 epochs with 3.5% expansion
        bootstrapEpochs = 21;
        bootstrapSupplyExpansionPercent = 350;

        // set seigniorageSaved to it's balance
        seigniorageSaved = IERC20(token).balanceOf(address(this));

        initialized = true;
        operator = msg.sender;
        emit Initialized(msg.sender, block.number);
    }

    function setOperator(address _operator) external onlyOperator {
        operator = _operator;
    }

    function setBoardroom(address _boardroom) external onlyOperator {
        boardroom = _boardroom;
    }

    function setRegulationStats(address _regulationStats) external onlyOperator {
        regulationStats = _regulationStats;
    }

    function setBoardroomWithdrawFee(uint256 _boardroomWithdrawFee) external onlyOperator {
        require(_boardroomWithdrawFee <= 20, "Max withdraw fee is 20%");
        boardroomWithdrawFee = _boardroomWithdrawFee;
        IBoardroom(boardroom).setWithdrawFee(boardroomWithdrawFee);
    }

    function setBoardroomStakeFee(uint256 _boardroomStakeFee) external onlyOperator {
        require(_boardroomStakeFee <= 5, "Max stake fee is 5%");
        boardroomStakeFee = _boardroomStakeFee;
        IBoardroom(boardroom).setStakeFee(boardroomStakeFee);
    }

    function setTokenOracle(address _tokenOracle) external onlyOperator {
        tokenOracle = _tokenOracle;
    }

    function setTokenPriceCeiling(uint256 _tokenPriceCeiling) external onlyOperator {
        require(_tokenPriceCeiling >= tokenPriceOne && _tokenPriceCeiling <= tokenPriceOne.mul(120).div(100), "out of range"); // [$1.0, $1.2]
        tokenPriceCeiling = _tokenPriceCeiling;
    }

    function setMaxSupplyExpansionPercents(uint256 _maxSupplyExpansionPercent) external onlyOperator {
        require(_maxSupplyExpansionPercent >= 10 && _maxSupplyExpansionPercent <= 1000, "_maxSupplyExpansionPercent: out of range"); // [0.1%, 10%]
        maxSupplyExpansionPercent = _maxSupplyExpansionPercent;
    }

    function setSupplyTiersEntry(uint8 _index, uint256 _value) external onlyOperator returns (bool) {
        require(_index >= 0, "Index has to be higher than 0");
        require(_index < 9, "Index has to be lower than count of tiers");
        if (_index > 0) {
            require(_value > supplyTiers[_index - 1]);
        }
        if (_index < 8) {
            require(_value < supplyTiers[_index + 1]);
        }
        supplyTiers[_index] = _value;
        return true;
    }

    function setMaxExpansionTiersEntry(uint8 _index, uint256 _value) external onlyOperator returns (bool) {
        require(_index >= 0, "Index has to be higher than 0");
        require(_index < 9, "Index has to be lower than count of tiers");
        require(_value >= 10 && _value <= 1000, "_value: out of range"); // [0.1%, 10%]
        maxExpansionTiers[_index] = _value;
        return true;
    }

    function setBondDepletionFloorPercent(uint256 _bondDepletionFloorPercent) external onlyOperator {
        require(_bondDepletionFloorPercent >= 500 && _bondDepletionFloorPercent <= 10000, "out of range"); // [5%, 100%]
        bondDepletionFloorPercent = _bondDepletionFloorPercent;
    }

    function setMaxSupplyContractionPercent(uint256 _maxSupplyContractionPercent) external onlyOperator {
        require(_maxSupplyContractionPercent >= 100 && _maxSupplyContractionPercent <= 1500, "out of range"); // [0.1%, 15%]
        maxSupplyContractionPercent = _maxSupplyContractionPercent;
    }

    function setMaxDebtRatioPercent(uint256 _maxDebtRatioPercent) external onlyOperator {
        require(_maxDebtRatioPercent >= 1000 && _maxDebtRatioPercent <= 10000, "out of range"); // [10%, 100%]
        maxDebtRatioPercent = _maxDebtRatioPercent;
    }

    function setBootstrap(uint256 _bootstrapEpochs, uint256 _bootstrapSupplyExpansionPercent) external onlyOperator {
        require(_bootstrapEpochs <= 120, "_bootstrapEpochs: out of range"); // <= 1 month
        require(_bootstrapSupplyExpansionPercent >= 100 && _bootstrapSupplyExpansionPercent <= 1000, "_bootstrapSupplyExpansionPercent: out of range"); // [1%, 10%]
        bootstrapEpochs = _bootstrapEpochs;
        bootstrapSupplyExpansionPercent = _bootstrapSupplyExpansionPercent;
    }

    function setExtraFunds(
        address _daoFund,
        uint256 _daoFundSharedPercent,
        address _devFund,
        uint256 _devFundSharedPercent,
        address _insuranceFund,
        uint256 _insuranceFundSharedPercent
    ) external onlyOperator {
        require(_daoFund != address(0), "zero");
        require(_daoFundSharedPercent <= 5000, "out of range"); // <= 50%
        require(_devFund != address(0), "zero");
        require(_devFundSharedPercent <= 1000, "out of range"); // <= 10%
        require(_insuranceFund != address(0), "zero");
        require(_insuranceFundSharedPercent <= 1000, "out of range"); // <= 10%

        daoFund = _daoFund;
        daoFundSharedPercent = _daoFundSharedPercent;

        devFund = _devFund;
        devFundSharedPercent = _devFundSharedPercent;

        insuranceFund = _insuranceFund;
        insuranceFundSharedPercent = _insuranceFundSharedPercent;
    }

    function setMaxDiscountRate(uint256 _maxDiscountRate) external onlyOperator {
        maxDiscountRate = _maxDiscountRate;
    }

    function setMaxPremiumRate(uint256 _maxPremiumRate) external onlyOperator {
        maxPremiumRate = _maxPremiumRate;
    }

    function setDiscountPercent(uint256 _discountPercent) external onlyOperator {
        require(_discountPercent <= 20000, "_discountPercent is over 200%");
        discountPercent = _discountPercent;
    }

    function setPremiumThreshold(uint256 _premiumThreshold) external onlyOperator {
        require(_premiumThreshold <= 150, "_premiumThreshold is higher than 1.5");
        premiumThreshold = _premiumThreshold;
    }

    function setPremiumPercent(uint256 _premiumPercent) external onlyOperator {
        require(_premiumPercent <= 20000, "_premiumPercent is over 200%");
        premiumPercent = _premiumPercent;
    }

    function setMintingFactorForPayingDebt(uint256 _mintingFactorForPayingDebt) external onlyOperator {
        require(_mintingFactorForPayingDebt >= 10000 && _mintingFactorForPayingDebt <= 20000, "_mintingFactorForPayingDebt: out of range"); // [100%, 200%]
        mintingFactorForPayingDebt = _mintingFactorForPayingDebt;
    }

    /* ========== MUTABLE FUNCTIONS ========== */

    function _updateTokenPrice() internal {
        try IOracle(tokenOracle).update() {} catch {}
    }

    function getTokenCirculatingSupply() public view returns (uint256) {
        IERC20 tokenErc20 = IERC20(token);
        uint256 totalSupply = tokenErc20.totalSupply();
        uint256 balanceExcluded = 0;
        for (uint8 entryId = 0; entryId < excludedFromTotalSupply.length; ++entryId) {
            balanceExcluded = balanceExcluded.add(tokenErc20.balanceOf(excludedFromTotalSupply[entryId]));
        }
        return totalSupply.sub(balanceExcluded);
    }

    function buyBonds(uint256 _tokenAmount, uint256 targetPrice) external onlyOneBlock checkCondition checkOperator {
        require(_tokenAmount > 0, "Treasury: cannot purchase bonds with zero amount");

        uint256 tokenPrice = getTokenPrice();
        require(tokenPrice == targetPrice, "Treasury: BOMB price moved");
        require(
            tokenPrice < tokenPriceOne, // price < $1
            "Treasury: tokenPrice not eligible for bond purchase"
        );

        require(_tokenAmount <= epochSupplyContractionLeft, "Treasury: not enough bond left to purchase");

        uint256 _rate = getBondDiscountRate();
        require(_rate > 0, "Treasury: invalid bond rate");

        uint256 _bondAmount = _tokenAmount.mul(_rate).div(1e18);
        uint256 tokenSupply = getTokenCirculatingSupply();
        uint256 newBondSupply = IERC20(bond).totalSupply().add(_bondAmount);
        require(newBondSupply <= tokenSupply.mul(maxDebtRatioPercent).div(10000), "over max debt ratio");

        IBasisAsset(token).burnFrom(msg.sender, _tokenAmount);
        IBasisAsset(bond).mint(msg.sender, _bondAmount);

        epochSupplyContractionLeft = epochSupplyContractionLeft.sub(_tokenAmount);
        _updateTokenPrice();
        if (regulationStats != address(0)) IRegulationStats(regulationStats).addBonded(epoch, _bondAmount);

        emit BoughtBonds(msg.sender, _tokenAmount, _bondAmount);
    }

    function redeemBonds(uint256 _bondAmount, uint256 targetPrice) external onlyOneBlock checkCondition checkOperator {
        require(_bondAmount > 0, "Treasury: cannot redeem bonds with zero amount");

        uint256 tokenPrice = getTokenPrice();
        require(tokenPrice == targetPrice, "Treasury: BOMB price moved");
        require(
            tokenPrice > tokenPriceCeiling, // price > $1.01
            "Treasury: tokenPrice not eligible for bond purchase"
        );

        uint256 _rate = getBondPremiumRate();
        require(_rate > 0, "Treasury: invalid bond rate");

        uint256 _tokenAmount = _bondAmount.mul(_rate).div(1e18);
        require(IERC20(token).balanceOf(address(this)) >= _tokenAmount, "Treasury: treasury has no more budget");

        seigniorageSaved = seigniorageSaved.sub(Math.min(seigniorageSaved, _tokenAmount));

        IBasisAsset(bond).burnFrom(msg.sender, _bondAmount);
        IERC20(token).safeTransfer(msg.sender, _tokenAmount);

        _updateTokenPrice();
        if (regulationStats != address(0)) IRegulationStats(regulationStats).addRedeemed(epoch, _tokenAmount);

        emit RedeemedBonds(msg.sender, _tokenAmount, _bondAmount);
    }

    function _sendToBoardroom(uint256 _amount) internal {
        IBasisAsset(token).mint(address(this), _amount);

        uint256 _daoFundSharedAmount = 0;
        if (daoFundSharedPercent > 0) {
            _daoFundSharedAmount = _amount.mul(daoFundSharedPercent).div(10000);
            IERC20(token).transfer(daoFund, _daoFundSharedAmount);
            emit DaoFundFunded(now, _daoFundSharedAmount);
        }

        uint256 _devFundSharedAmount = 0;
        if (devFundSharedPercent > 0) {
            _devFundSharedAmount = _amount.mul(devFundSharedPercent).div(10000);
            IERC20(token).transfer(devFund, _devFundSharedAmount);
            emit DevFundFunded(now, _devFundSharedAmount);
        }

        uint256 _insuranceFundSharedAmount = 0;
        if (insuranceFundSharedPercent > 0) {
            _insuranceFundSharedAmount = _amount.mul(insuranceFundSharedPercent).div(10000);
            IERC20(token).transfer(insuranceFund, _insuranceFundSharedAmount);
            emit InsuranceFundFunded(now, _insuranceFundSharedAmount);
        }


        _amount = _amount.sub(_daoFundSharedAmount).sub(_devFundSharedAmount).sub(_insuranceFundSharedAmount);

        IERC20(token).safeApprove(boardroom, 0);
        IERC20(token).safeApprove(boardroom, _amount);
        IBoardroom(boardroom).allocateSeigniorage(_amount);
        if (regulationStats != address(0)) IRegulationStats(regulationStats).addEpochInfo(epoch.add(1), previousEpochTokenPrice, _amount,
            _amount, _daoFundSharedAmount, _devFundSharedAmount, _insuranceFundSharedAmount);
        emit BoardroomFunded(now, _amount);
    }

    function _calculateMaxSupplyExpansionPercent(uint256 _tokenSupply) internal returns (uint256) {
        for (uint8 tierId = 8; tierId >= 0; --tierId) {
            if (_tokenSupply >= supplyTiers[tierId]) {
                maxSupplyExpansionPercent = maxExpansionTiers[tierId];
                break;
            }
        }
        return maxSupplyExpansionPercent;
    }

    function allocateSeigniorage() external onlyOneBlock checkCondition checkEpoch checkOperator {
        _updateTokenPrice();
        previousEpochTokenPrice = getTokenPrice();
        uint256 tokenSupply = getTokenCirculatingSupply().sub(seigniorageSaved);
        if (epoch < bootstrapEpochs) {
            // 28 first epochs with 4.5% expansion
            _sendToBoardroom(tokenSupply.mul(bootstrapSupplyExpansionPercent).div(10000));
            emit Seigniorage(epoch, previousEpochTokenPrice, tokenSupply.mul(bootstrapSupplyExpansionPercent).div(10000));
        } else {
            if (previousEpochTokenPrice > tokenPriceCeiling) {
                // Expansion ($BOMB Price > 1 $ETH): there is some seigniorage to be allocated
                uint256 bondSupply = IERC20(bond).totalSupply();
                uint256 _percentage = previousEpochTokenPrice.sub(tokenPriceOne);
                uint256 _savedForBond;
                uint256 _savedForBoardroom;
                uint256 _mse = _calculateMaxSupplyExpansionPercent(tokenSupply).mul(1e14);
                if (_percentage > _mse) {
                    _percentage = _mse;
                }
                if (seigniorageSaved >= bondSupply.mul(bondDepletionFloorPercent).div(10000)) {
                    // saved enough to pay debt, mint as usual rate
                    _savedForBoardroom = tokenSupply.mul(_percentage).div(1e18);
                } else {
                    // have not saved enough to pay debt, mint more
                    uint256 _seigniorage = tokenSupply.mul(_percentage).div(1e18);
                    _savedForBoardroom = _seigniorage.mul(seigniorageExpansionFloorPercent).div(10000);
                    _savedForBond = _seigniorage.sub(_savedForBoardroom);
                    if (mintingFactorForPayingDebt > 0) {
                        _savedForBond = _savedForBond.mul(mintingFactorForPayingDebt).div(10000);
                    }
                }
                if (_savedForBoardroom > 0) {
                    _sendToBoardroom(_savedForBoardroom);
                }
                if (_savedForBond > 0) {
                    seigniorageSaved = seigniorageSaved.add(_savedForBond);
                    IBasisAsset(token).mint(address(this), _savedForBond);
                    emit TreasuryFunded(now, _savedForBond);
                }
            }
        }
    }

    function governanceRecoverUnsupported(
        IERC20 _token,
        uint256 _amount,
        address _to
    ) external onlyOperator {
        // do not allow to drain core tokens
        require(address(_token) != address(token), "token");
        require(address(_token) != address(bond), "bond");
        require(address(_token) != address(share), "share");
        _token.safeTransfer(_to, _amount);
    }

    function boardroomSetOperator(address _operator) external onlyOperator {
        IBoardroom(boardroom).setOperator(_operator);
    }

    function boardroomSetLockUp(uint256 _withdrawLockupEpochs, uint256 _rewardLockupEpochs) external onlyOperator {
        IBoardroom(boardroom).setLockUp(_withdrawLockupEpochs, _rewardLockupEpochs);
    }

    function boardroomSetReserveFund(address _reserveFund) external onlyOperator {
        IBoardroom(boardroom).setReserveFund(_reserveFund);
    }

    function boardroomAllocateSeigniorage(uint256 amount) external onlyOperator {
        IBoardroom(boardroom).allocateSeigniorage(amount);
    }

    function boardroomSetWithdrawFeeMultiplier(uint256 _amount) external onlyOperator {
        IBoardroom(boardroom).setWithdrawFeeMultiplier(_amount);
    }

    function boardroomGovernanceRecoverUnsupported(
        address _token,
        uint256 _amount,
        address _to
    ) external onlyOperator {
        IBoardroom(boardroom).governanceRecoverUnsupported(_token, _amount, _to);
    }
}
