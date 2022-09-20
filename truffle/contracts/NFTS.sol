// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;


//import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";

import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFTS is ERC1155, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => string) private _uris;

    constructor() ERC1155('') {
    }


    function uri(uint _tokenId) override public view returns (string memory) {
        return _uris[_tokenId];
    }



    function setTokenUri(uint256 _tokenId, string memory _uri) public onlyOwner {
        _uris[_tokenId] = _uri;
    }

    function mint(address _recipient, string memory _tokenURI) public onlyOwner returns (uint256){
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        setTokenUri(newTokenId, _tokenURI);
        _mint(_recipient, newTokenId, 1, "");
        return newTokenId;
    }

    function batchMint(address _recipient, string[] memory _tokenURIs) public onlyOwner  returns (uint256[] memory){
        uint256[] memory newTokenIds = new uint256[](_tokenURIs.length);

        for (uint256 i = 0; i < _tokenURIs.length; i++) {
            _tokenIds.increment();
            uint256 newTokenId = _tokenIds.current();
            setTokenUri(newTokenId, _tokenURIs[i]);
            _mint(_recipient, newTokenId, 1, "");
            newTokenIds[i] = newTokenId;
        }
        return newTokenIds;
    }


    function name() public pure returns (string memory) {
        return "Collection Of NFTs by Celenium";
    }

}



