const CONTRACT_ADDRESS = "0x2Ae9eBfC5931cF1639a9EB199B75D3D6d2d4727a"
const META_DATA_URL = "ipfs://bafyreicpehtksjcl2zbnzg6wqbpboxtiddgbbeo6t7s3dj2emlg6mh5omm/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });