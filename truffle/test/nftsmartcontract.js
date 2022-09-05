const NFTSmartContract = artifacts.require("NFTSmartContract");

contract('NFTSmartContract', () => {
  it.only('should read newly added NFT Number', async() => {
    const NFTSmartContractInstance = await NFTSmartContract.deployed();

    await NFTSmartContractInstance.addItem('0x9Bb8fc7c73a725CA467A61Bd77AA9b6B7846d952', 'tokenURI')

   let a = await NFTSmartContractInstance.balanceOf.call('0x9Bb8fc7c73a725CA467A61Bd77AA9b6B7846d952')
    console.log(a.toNumber())

  });
});
