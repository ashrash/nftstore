
const CONTRACT_ADDRESS = "0xCaFf9c374411baE0BD28a56d3a5522ED04FBd188"
const META_DATA_URL = "ipfs:/bafyreibucihlkyeqa2eo32waac3nc3r4czgu7ryjrle36y5i3fbkpozsdi/metadata.json"


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