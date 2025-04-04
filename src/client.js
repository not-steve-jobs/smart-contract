const { createPublicClient, http } = require('viem');
const { rpcUrl, chainId } = require('./config');

const client = createPublicClient({
    chain: {
        id: chainId,
        name: "localhost",
        network: "localhost",
        nativeCurrency: {
            decimals: 18,
            name: "Ether",
            symbol: "ETH"
        },
        rpcUrls: {
            default: { http: [rpcUrl] }
        }
    },
    transport: http(rpcUrl)
});

module.exports = client;
