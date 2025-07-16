
# CROP-CHAIN

Decentralised Pland Disesase detection and solution verification system.This repo has the smart-contract code of the project. This is a research project. Technologies include Hardhat, Ipfs, web3 , moralis and Ethereum smart contract development using solidity.This is a permissioned chain so the admin aka KvkManager is the who can give access to the chain, who the deployer of the smart contract  





## 🔗 Links

UI- github->[https://github.com/KolliKesav/CropChainFrontend ](https://github.com/KolliKesav/CropChainFrontend)

Etherscan Testnet->[https://sepolia.etherscan.io/tx/0x040fea4b8a199911d5639d042280f57f3faec8baf3cddd6150cc3dd8c104da50](https://sepolia.etherscan.io/tx/0x040fea4b8a199911d5639d042280f57f3faec8baf3cddd6150cc3dd8c104da50)




## Screenshot Sepolia Testnet deployment
![Screenshot from 2024-05-19 13-15-20](https://github.com/Adhitya-Vardhan/CropChain/assets/116478666/1f08e103-092f-4f82-b077-e525c688efdb)



## Installation

Locate to the root folder of the project.

To run the smart contract, this will intialise the local block chian environment

```bash
  yarn hardhat node --hostname 0.0.0.0
```
Now open a new terminal. this will deploy the smart contract in the local block chain i.e in the hardhat environment. you can see the logs in the node terminal

   ```bash 
  yarn hardhat run --network localhost scripts/deploy.js
``` 
## License

[MIT](https://choosealicense.com/licenses/mit/)

