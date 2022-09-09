// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

// Importer VRF de Chainlink
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract NFTS is ERC1155 {



    constructor() ERC1155('ipfs://bafkreievlfq2775xac4qage6vkyzqrhp67jwx5ggatzbs6t2eagl7lgc4a') {
        for(uint i=1; i <2 ;i++) {
            _mint(msg.sender, i, 1, bytes(abi.encodePacked("Amedee number #", Strings.toString(i))));
        }
    }

    function uri(uint _tokenId) override public pure returns(string memory) {
        return string(abi.encodePacked(
                "ipfs://bafkreievlfq2775xac4qage6vkyzqrhp67jwx5ggatzbs6t2eagl7lgc4a"));
    }

    function name() public pure returns(string memory) {
        string memory collectionName = "Amedee Collection With One NFT";
        return collectionName;
    }
}
