//https://eth-sepolia.g.alchemy.com/v2/vFBFTIp00e4dZLdCCsbcHpI0kEnuGM4i

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ZYPLRl3MFlvo0aHpOt3CCiAl2Yflup-x",
      accounts: [
        "0cdc721aae063728b79e7c948bc4d78d0b58a68208667cf4908750bb4eccab23",
      ],
    },
  },
};
