// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  console.log("Available accounts:");
accounts.forEach((account, index) => {
  console.log(`${index}: ${account.address}`);
});
  const upload = await hre.ethers.deployContract("Upload");

  // Replace waitForDeployment() with deployed()
  //await upload.deployed();

  console.log("Upload deployed to ", upload.target);

  
  const deployerAddress = accounts[0].address;
  console.log("Address of the deployer: ", deployerAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

