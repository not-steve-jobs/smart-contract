# ERC20 Token & Viem Integration

## Project Description

This project showcases:
- An **ERC20 smart contract** written in Solidity (using OpenZeppelin).
- A **Node.js backend** with an HTTP API that leverages **Viem** to interact with the deployed contract.

By default, the project targets a **local blockchain** (Hardhat or Ganache). However, you can adapt it to any public testnet or mainnet by adjusting your environment variables.

## Prerequisites

- **Node.js** (version 20 is recommended)
- **npm** (bundled with Node.js)
- **Local blockchain** (e.g., Hardhat or Ganache)
- **Git** (to clone this repository)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd my-erc20-project

2. **install dependencies:**
    ```
   npm install
   
3. **(Optional) Configure environment variables:**
    ```# .env
    CONTRACT_ADDRESS=0xYourDeployedContractAddress
    RPC_URL=http://127.0.0.1:8545
    CHAIN_ID=1337
    PORT=3000

4. **Start a local blockchain network:**
    ```
   npx hardhat node

5. **Deploy the smart contract:**
    ```
   npm run deploy

6. **Run the Node.js server:**
    ```
   npm start