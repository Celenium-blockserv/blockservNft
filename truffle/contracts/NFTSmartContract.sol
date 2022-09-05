// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

// Importer VRF de Chainlink
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFTSmartContract is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Amedee", "AMD") {}

    function addItem(address employee, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(employee, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }




}