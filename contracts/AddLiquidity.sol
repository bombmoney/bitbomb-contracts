// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./owner/Operator.sol";
import "./interfaces/IUniswapV2Router.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract AddLiquidity is Operator {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /* ========== STATE VARIABLES ========== */

    address public uniRouter = address(0x10ED43C718714eb63d5aA57B78B54704E256024E);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to,
        uint256 deadline
    )
        external
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        return _addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to);
    }

    function addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    )
        external
        payable
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        return _addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to);
    }







    function governanceRecoverUnsupported(
        IERC20 _token,
        uint256 _amount,
        address _to
    ) external onlyOperator {
        _token.safeTransfer(_to, _amount);
    }










    function _addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to
    ) 
    private
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        require(amountTokenDesired != 0 && msg.value != 0, "amounts can't be 0");

        IERC20(token).transferFrom(msg.sender, address(this), amountTokenDesired);
        _approveTokenIfNeeded(token, uniRouter);

        uint256 resultAmtToken;
        uint256 resultAmtEth;
        uint256 liquidity;
        (resultAmtToken, resultAmtEth, liquidity) = IUniswapV2Router(uniRouter).addLiquidityETH{value: msg.value}(
            token,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            to,
            block.timestamp
        );

        if (amountTokenDesired.sub(resultAmtToken) > 0) {
            IERC20(token).transfer(to, amountTokenDesired.sub(resultAmtToken));
        }
        return (resultAmtToken, resultAmtEth, liquidity);
    }




    function _addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountADesired,
        uint256 amountBDesired,
        uint256 amountAMin,
        uint256 amountBMin,
        address to
    )
        private
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        require(amountADesired != 0 && amountBDesired != 0, "amounts can't be 0");

        IERC20(tokenA).transferFrom(msg.sender, address(this), amountADesired);
        IERC20(tokenB).transferFrom(msg.sender, address(this), amountBDesired);
        _approveTokenIfNeeded(tokenA, uniRouter);
        _approveTokenIfNeeded(tokenB, uniRouter);

        uint256 resultAmtA;
        uint256 resultAmtB;
        uint256 liquidity;
        (resultAmtA, resultAmtB, liquidity) = IUniswapV2Router(uniRouter).addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            block.timestamp
        );

        if (amountADesired.sub(resultAmtA) > 0) {
            IERC20(tokenA).transfer(to, amountADesired.sub(resultAmtA));
        }
        if (amountBDesired.sub(resultAmtB) > 0) {
            IERC20(tokenB).transfer(to, amountBDesired.sub(resultAmtB));
        }
        return (resultAmtA, resultAmtB, liquidity);
    }

    function _approveTokenIfNeeded(address _token, address _router) private {
        if (IERC20(_token).allowance(address(this), _router) == 0) {
            IERC20(_token).approve(_router, type(uint256).max);
        }
    }
}
