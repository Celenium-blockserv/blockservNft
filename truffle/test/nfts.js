const NFTS = artifacts.require("NFTS");

contract('NFTS', () => {
  it.only('should read collection name', async() => {
    const NFTSInstance = await NFTS.deployed();

    let name = await NFTSInstance.name.call()
    assert.equal(name, "Amedee Collection", "Could not get collection name");


    let uri = await NFTSInstance.uri.call(1)
    assert.equal(uri, "ipfs://bafkreifds27353i4bdh2uup4zsbv6eihj5szu4szic6vd4nkeagpzufj3y/1.json", "Could not get uri for tokenId1");


  });
});
