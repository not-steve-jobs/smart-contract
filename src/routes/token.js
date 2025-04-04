const express = require('express');
const client = require('../client');
const { contractAddress } = require('../config');
const tokenABI = require('../abi/tokenABI');

const router = express.Router();

router.get('/token-info', async (req, res) => {
  try {
    const name = await client.readContract({
      address: contractAddress,
      abi: tokenABI,
      functionName: 'name',
    });
    const symbol = await client.readContract({
      address: contractAddress,
      abi: tokenABI,
      functionName: 'symbol',
    });
    const totalSupply = await client.readContract({
      address: contractAddress,
      abi: tokenABI,
      functionName: 'totalSupply',
    });
    res.json({ name, symbol, totalSupply: totalSupply.toString() });
  } catch (error) {
    console.error('Error getting token information:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/balance/:address', async (req, res) => {
  const userAddress = req.params.address;
  try {
    const balance = await client.readContract({
      address: contractAddress,
      abi: tokenABI,
      functionName: 'balanceOf',
      args: [userAddress],
    });
    res.json({ address: userAddress, balance: balance.toString() });
  } catch (error) {
    console.error('Error while getting balance:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/transferFrom', async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const tx = await client.writeContract({
      address: contractAddress,
      abi: tokenABI,
      functionName: 'transferFrom',
      args: [from, to, amount],
      account: from,
    });
    res.json({ tx });
  } catch (error) {
    console.error('Error while executing transferFrom:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
