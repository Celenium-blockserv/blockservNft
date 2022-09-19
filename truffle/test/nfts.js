const NFTS = artifacts.require("NFTS");

contract('NFTS', () => {
  it('should read collection name', async() => {
    const NFTSInstance = await NFTS.deployed();

    let name = await NFTSInstance.name.call()
    assert.equal(name, "Celenium Collection with 3 NFTs", "Could not get collection name");


    let uri = await NFTSInstance.uri.call(1)
    assert.equal(uri, "ipfs://bafybeidyddf2ft6ktzcjxnvcpx3rx3mpboochj5cgitediyyt6pl5urgry/1.json", "Could not get uri for tokenId1");

//    let a = await NFTSmartContractInstance.balanceOf.call('0x9Bb8fc7c73a725CA467A61Bd77AA9b6B7846d952')
//    console.log(a.toNumber())
  });
});
