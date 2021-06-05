import { ethers, run } from 'hardhat';

import deployer from '../.secret';

// WBNB address on BSC, WETH address on ETH
const WethAddr = '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a';

async function main() {
  await run('compile');
  const FlashBot = await ethers.getContractFactory('FlashBot');
  const flashBot = await FlashBot.deploy(WethAddr);

  console.log(`FlashBot deployed to ${flashBot.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
