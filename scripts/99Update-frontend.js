const hre = require("hardhat");
const { ethers } = hre;
const fs = require("fs");

const FRONT_END_ADD = "../trial/src/constants/contractAddress.json";
const FRONT_END_ABI = "../trial/src/costants/abi.json";

module.exports = async function () {
  updateContractAddress();
  updateAbi();
};

async function updateAbi() {
  const upload = await ethers.getContractFactory("Upload");
  fs.writeFileSync(
    FRONT_END_ABI,
    upload.interface.format(ethers.utils.FormatTypes.JSON)
  );
}

async function updateContractAddress() {
  const upload = await ethers.getContractFactory("Upload");
  const chainId = network.config.chainId.toString();
  const currentAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADD, "utf8"));
  if (chainId in currentAddresses) {
    if (!currentAddresses[chainId].includes[upload.address]) {
      currentAddresses[chainId].push(upload.address);
    }
  }
  {
    currentAddresses[chainId] = [upload.address];
  }
  fs.writeFileSync(FRONT_END_ADD, JSON.stringify(currentAddresses));
}

module.exports.tags = ["all", "frontend"];
