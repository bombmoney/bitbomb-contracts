// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./Token.sol";

contract BitBTCToken is Token {
    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        address _taxFund
    ) public Token(name_, symbol_, decimals_, _taxFund) {
        // Initial distribution for the first 24h genesis pools
        INITIAL_GENESIS_POOL_DISTRIBUTION = 500000 ether;
        _mint(msg.sender, 500 ether);
    }
}
