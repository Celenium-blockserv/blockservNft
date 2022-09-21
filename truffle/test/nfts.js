const NFTS = artifacts.require("NFTS");

contract('NFTS', (accounts) => {
  it('should read collection name', async() => {
    const NFTSInstance = await NFTS.deployed();

    let name = await NFTSInstance.name.call()
    assert.equal(name, "BIG Collection Of NFTs by Celenium", "Could not get collection name");

  });
    it('should mint and get uri', async() => {
        const NFTSInstance = await NFTS.deployed();

        await NFTSInstance.batchMint(accounts[0], ['uri'], {from: accounts[0]})
        let uri =  await NFTSInstance.uri.call(1);
        assert.equal(uri, "uri", "Could not get uri");

    });
});
