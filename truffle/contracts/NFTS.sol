// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

// Importer VRF de Chainlink
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract NFTS is ERC1155 {



    constructor() ERC1155("ipfs://bafkreifds27353i4bdh2uup4zsbv6eihj5szu4szic6vd4nkeagpzufj3y/{id}.json") {
        for(uint i=1; i <2 ;i++) {
            _mint(msg.sender, i, 1, bytes(abi.encodePacked("Amedee #", Strings.toString(i))));
        }
    }

    function uri(uint _tokenId) override public view returns(string memory) {
        return string(abi.encodePacked(
                "ipfs://bafkreifds27353i4bdh2uup4zsbv6eihj5szu4szic6vd4nkeagpzufj3y/",
                Strings.toString(_tokenId),
                ".json"));
    }

    function name() public returns(string memory) {
        string memory name = "Amedee Collection";
        return name;
    }
}
