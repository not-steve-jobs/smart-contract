const fs = require('fs');

async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18);
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(initialSupply);
    await token.deployed();
    console.log("MyToken deployed to:", token.address);

    const data = { contractAddress: token.address };
    fs.writeFileSync('deployedAddress.json', JSON.stringify(data, null, 2));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
