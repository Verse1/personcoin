// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PersonCoin is ERC20, Ownable {
    constructor() ERC20("PersonCoin", "PCN") {
        _mint(msg.sender, 1000 * (10 ** uint256(decimals()))); // Mint initial supply
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
