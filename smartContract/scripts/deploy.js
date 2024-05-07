// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  // const usdc = await hre.ethers.deployContract("USDCToken", []);
  // await usdc.waitForDeployment();
  // console.log("usdc token : ", usdc.target);

  const lock = await hre.ethers.deployContract("LandRecord", [10, "0xAE5dC947A10f328c14Cf3b30470dCd06852e4981", "0x73d82e6265673D742F2463936f298b5F9f82f31F"]);
  await lock.waitForDeployment();
  console.log(
    `contract is deployed to", ${lock.target}`
  );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
