const NFTS = artifacts.require("NFTS");

contract('NFTS', () => {
  it.only('should read collection name', async() => {
    const NFTSInstance = await NFTS.deployed();

    let name = await NFTSInstance.name.call()
    assert.equal(name, "Amedee Collection With One NFT", "Could not get collection name");


    let uri = await NFTSInstance.uri.call(1)
    assert.equal(uri, "ipfs://bafkreievlfq2775xac4qage6vkyzqrhp67jwx5ggatzbs6t2eagl7lgc4a", "Could not get uri for tokenId1");


  });
});
