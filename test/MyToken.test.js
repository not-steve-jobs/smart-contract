const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let Token, token, owner, addr1, addr2;
    const initialSupply = ethers.utils.parseUnits("1000000", 18);

    beforeEach(async function () {
        [owner, addr1, addr2, _] = await ethers.getSigners();
        Token = await ethers.getContractFactory("MyToken");
        token = await Token.deploy(initialSupply);
        await token.deployed();
    });

    it("Should set the right owner and initial supply", async function () {
        const ownerBalance = await token.balanceOf(owner.address);
        expect(await token.totalSupply()).to.equal(ownerBalance);
    });

    it("Should transfer tokens between accounts", async function () {
        await token.transfer(addr1.address, ethers.utils.parseUnits("50", 18));
        const addr1Balance = await token.balanceOf(addr1.address);
        expect(addr1Balance).to.equal(ethers.utils.parseUnits("50", 18));
    });

    it("Should handle approvals and transferFrom", async function () {
        await token.approve(addr1.address, ethers.utils.parseUnits("100", 18));
        expect(await token.allowance(owner.address, addr1.address)).to.equal(ethers.utils.parseUnits("100", 18));

        await token.connect(addr1).transferFrom(owner.address, addr2.address, ethers.utils.parseUnits("50", 18));
        const addr2Balance = await token.balanceOf(addr2.address);
        expect(addr2Balance).to.equal(ethers.utils.parseUnits("50", 18));
    });
});
