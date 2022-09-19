// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

// Importer VRF de Chainlink
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract NFTS is ERC1155 {

    constructor() ERC1155('ipfs://bafybeidyddf2ft6ktzcjxnvcpx3rx3mpboochj5cgitediyyt6pl5urgry/{id}.json') {
        for(uint i=1; i <5 ;i++) {
            _mint(msg.sender, i, 1, bytes(abi.encodePacked("Celenium number ", Strings.toString(i))));
        }
    }

    function uri(uint _tokenId) override public pure returns(string memory) {
        return string(abi.encodePacked(
                "ipfs://bafybeidyddf2ft6ktzcjxnvcpx3rx3mpboochj5cgitediyyt6pl5urgry/",
                Strings.toString(_tokenId),
                ".json"));
    }

    function name() public pure returns(string memory) {
        string memory collectionName = "Celenium Collection with 3 NFTs";
        return collectionName;
    }
}
