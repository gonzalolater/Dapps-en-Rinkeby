require("@nomiclabs/hardhat-waffle");
requiere("dotenv").config();

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.EPLOYER_SGINER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId} <<PASTE YOUR INFURA PROJECT ID open (DANGEROUS)>>`,
      accounts: [privateKey],
      //  ["<<PASTE YOUR PRIVATE KEY HERE  (DANGEROUS)>>"]
    },
  },
};
