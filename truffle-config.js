const HDWalletProvider = require('@truffle/hdwallet-provider');
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const etherscanKey = fs.readFileSync(".etherscanAPI").toString().trim();

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     rinkeby: {
     provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/fb70c8e76d34493dbaaf579c6ef88164`),
     network_id: 4,       // Ropsten's id
     gas: 5500000,        // Ropsten has a lower block limit than mainnet
     },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: etherscanKey
  },
};
