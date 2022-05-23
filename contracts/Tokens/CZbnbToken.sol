// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

import "../lib/SafeMath8.sol";
import "../owner/Operator.sol";
import "../interfaces/IOracle.sol";
/*
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with GSN meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */


interface ILiquidityFund {
    function addLiquidity(uint256 _amount) external;
}

pragma solidity 0.6.12;

contract CZbnbToken is ERC20Burnable, Operator {
    using SafeMath8 for uint8;
    using SafeMath for uint256;

    // Initial distribution for the first 24h genesis pools
    uint256 public constant INITIAL_GENESIS_POOL_DISTRIBUTION = 300 ether;

    // Have the rewards been distributed to the pools
    bool public rewardPoolDistributed = false;

    /* ========== STATE VARIABLES ========== */

    bool public addLiquidityEnabled = false;

    address public oracle;

    uint256 public burnRate;
    uint256 public taxRate; // buy back Peg Token and add liquidity
    address public taxFund; // fund buy back Peg Token

    uint256 private _totalBurned;
    uint256 private _totalTaxAdded;
    mapping(address => bool) private _isExcludedFromFee;
    mapping(address => bool) private _isExcludedToFee;

    /* =================== Added variables (need to keep orders for proxy to work) =================== */
    /*...

    /* ========== EVENTS ========== */

    event TaxAdded(address indexed account, address taxFund, uint256 amount);

    /* ========== Modifiers =============== */

    /* ========== GOVERNANCE ========== */

    /**
     * @notice Constructs the CZpegs-Peg Token ERC-20 contract.
     */
    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        address _taxFund
    ) public ERC20(name_, symbol_) {
        _setupDecimals(decimals_);
        taxFund = _taxFund;
        burnRate = 750;
        taxRate = 750;
        _mint(msg.sender, 10 ether);
    }

    function setOracle(address _oracle) external onlyOwner {
        oracle = _oracle;
    }

    function toggleAddLiquidityEnabled() external onlyOwner {
        addLiquidityEnabled = !addLiquidityEnabled;
    }

    function setBurnRate(uint256 _burnRate) external onlyOwner {
        require(_burnRate <= 1500, "too high"); // <= 15%
        burnRate = _burnRate;
    }

    function setTaxRate(uint256 _taxRate) external onlyOwner {
        require(_taxRate <= 1500, "too high"); // <= 15%
        taxRate = _taxRate;
    }

    function setTaxFund(address _taxFund) external onlyOwner {
        require(_taxFund != address(0), "zero");
        taxFund = _taxFund;
    }

    function setExcludeFromFee(address _account, bool _status)
        external
        onlyOwner
    {
        _isExcludedFromFee[_account] = _status;
    }

    function setExcludeToFee(address _account, bool _status)
        external
        onlyOwner
    {
        _isExcludedToFee[_account] = _status;
    }

    function setExcludeBothDirectionsFee(address _account, bool _status)
        external
        onlyOwner
    {
        _isExcludedFromFee[_account] = _status;
        _isExcludedToFee[_account] = _status;
    }

    /* ========== VIEW FUNCTIONS ========== */

    function totalBurned() external view returns (uint256) {
        return _totalBurned;
    }

    function totalTaxAdded() external view returns (uint256) {
        return _totalTaxAdded;
    }

    function getTokenPrice() public view returns (uint256) {
        address _oracle = oracle;
        return
            (_oracle == address(0))
                ? 1e18
                : uint256(IOracle(_oracle).consult(address(this), 1e18));
    }

    function getTokenUpdatedPrice() public view returns (uint256) {
        address _oracle = oracle;
        return
            (_oracle == address(0))
                ? 1e18
                : uint256(IOracle(_oracle).twap(address(this), 1e18));
    }

    function isExcludedFromFee(address _account) external view returns (bool) {
        return _isExcludedFromFee[_account];
    }

    function isExcludedToFee(address _account) external view returns (bool) {
        return _isExcludedToFee[_account];
    }

    /* ========== MUTATIVE FUNCTIONS ========== */

    /**
     * @notice Operator mints basis CZpegs-Peg Token to a recipient
     * @param recipient_ The address of recipient
     * @param amount_ The amount of basis CZpegs-Peg Token to mint to
     * @return whether the process has been done
     */
    function mint(address recipient_, uint256 amount_)
        public
        onlyOperator
        returns (bool)
    {
        uint256 balanceBefore = balanceOf(recipient_);
        _mint(recipient_, amount_);
        uint256 balanceAfter = balanceOf(recipient_);

        return balanceAfter > balanceBefore;
    }

    function burn(uint256 amount) public override {
        super.burn(amount);
    }

    function burnFrom(address account, uint256 amount)
        public
        override
        onlyOperator
    {
        super.burnFrom(account, amount);
    }

    /* ========== OVERRIDE STANDARD FUNCTIONS ========== */

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements
     *
     * - `_account` cannot be the zero address.
     * - `_account` must have at least `_amount` tokens.
     */
    function _burn(address _account, uint256 _amount) internal override {
        super._burn(_account, _amount);
        _totalBurned = _totalBurned.add(_amount);
    }

    /**
     * @dev Moves tokens `amount` from `sender` to `recipient`.
     *
     * This is internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `sender` cannot be the zero address.
     * - `recipient` cannot be the zero address.
     * - `sender` must have a balance of at least `amount`.
     */
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override {
        require(sender != address(0), "CZpegs: transfer to the zero address");
        require(
            recipient != address(0),
            "CZpegs: transfer to the zero address"
        );

        uint256 _amount = amount;

        _beforeTokenTransfer(sender, recipient, _amount);

        if (!_isExcludedFromFee[sender] && !_isExcludedToFee[recipient]) {
            uint256 _tokenPrice = getTokenUpdatedPrice();
            if (_tokenPrice < 1e18) {
                {
                    uint256 _taxRate = taxRate;
                    if (_taxRate > 0) {
                        uint256 _taxAmount = amount.mul(_taxRate).div(10000);
                        address _taxFund = taxFund;
                        super._transfer(sender, _taxFund, _taxAmount);
                        _amount = _amount.sub(_taxAmount);
                        _totalTaxAdded = _totalTaxAdded.add(_taxAmount);
                        if (addLiquidityEnabled) {
                            ILiquidityFund(_taxFund).addLiquidity(_taxAmount);
                        }
                        emit TaxAdded(sender, _taxFund, _taxAmount);
                    }
                }
                {
                    uint256 _burnRate = burnRate;
                    if (_burnRate > 0) {
                        uint256 _burnAmount = amount.mul(_burnRate).div(10000);
                        _burn(sender, _burnAmount);
                        _amount = _amount.sub(_burnAmount);
                    }
                }
            }
        }

        super._transfer(sender, recipient, _amount);
    }
    /**
     * @notice distribute to reward pool (only once)
     */
    function distributeReward(
        address _genesisPool
    ) external onlyOperator {
        require(!rewardPoolDistributed, "only can distribute once");
        require(_genesisPool != address(0), "!_genesisPool");
        rewardPoolDistributed = true;
        _mint(_genesisPool, INITIAL_GENESIS_POOL_DISTRIBUTION);
    }

    /* ========== EMERGENCY ========== */

    function governanceRecoverUnsupported(IERC20 _token) external onlyOwner {
        _token.transfer(owner(), _token.balanceOf(address(this)));
    }
}