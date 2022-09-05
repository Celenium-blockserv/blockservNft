const NFTS = artifacts.require("NFTS");

module.exports = function (deployer) {
  deployer.deploy(NFTS);
};
