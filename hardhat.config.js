require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: {
    version: "0.8.17",
    settings: {
      viaIR: true,        // use the new IR pipeline
      optimizer: {
        enabled: true,
        runs: 200,         // tuned for on‑chain code
        details: {
          yul: true,       // enable Yul optimizer passes
          deduplicate: true,
          cse: true,       // common subexpression elimination
          inliner: true
        },
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "https://ethereum-sepolia.publicnode.com",
      accounts: process.env.PRIVATE_KEY ? [`0x${process.env.PRIVATE_KEY}`] : [],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // For verifying contracts on Etherscan
  },

};
