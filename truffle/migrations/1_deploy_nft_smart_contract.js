const NFTSmartContract = artifacts.require("NFTSmartContract");

module.exports = function (deployer) {
  deployer.deploy(NFTSmartContract);
};
