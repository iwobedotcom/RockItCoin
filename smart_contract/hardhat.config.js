require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/jsSArVZDzRbXuoZXvTDr0xm9Qg3Xpm-R",
      accounts: [
        "ccce440252aa584ce32f5a55fa8736d626bfed38f2a33fe30ffe654cdb622bf5",
      ],
    },
  },
};
