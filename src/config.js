require('dotenv').config();
const path = require('path');

let deployedAddress;
try {
  deployedAddress = require(
    path.join(__dirname, '..', 'deployedAddress.json')
  ).contractAddress;
} catch (error) {
  console.warn(
    'Failed to read deployedAddress.json. Please check that the contract is deployed.'
  );
}

if (!process.env.CONTRACT_ADDRESS && !deployedAddress) {
  throw new Error('НContract address not found. Deploy smart contract first.');
}

module.exports = {
  contractAddress: process.env.CONTRACT_ADDRESS || deployedAddress,
  rpcUrl: process.env.RPC_URL || 'http://127.0.0.1:8545',
  chainId: process.env.CHAIN_ID ? parseInt(process.env.CHAIN_ID, 10) : 1337,
  port: process.env.PORT || 3000,
};
