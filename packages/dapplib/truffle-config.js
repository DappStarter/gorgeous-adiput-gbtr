require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain clutch harvest lonely fringe gasp'; 
let testAccounts = [
"0x52a40bbfa5048e27965473fcf6e2db23306ab600e4aabd157efc0640cb838bcb",
"0x94f2cc0d0169f5be2128514c3542e45aff98a53beb95b06d40f4c46338b1358e",
"0xb8f64304c3fd3c0af6a11d89dcf40d8a2c3fca7d4d6b72d3b6c7d2defd1b5641",
"0x0da7fe9e2d7cf0361464c95f0cf18a2845982292d0c4d53c68f31de7b918ee23",
"0xd5996f1d59ae9f37661f892c9d55d19c9fcf46077cd25f31d802bdf3db0d4cc6",
"0xec67c4512da248b17607816b6c9aeb7386662fe6bd34dfba947a636d07020ded",
"0xb4c066f88f28548e37fb0a82d2e2646b6e1f16e5b065a829084aa76a35b0b0c7",
"0xc8a9c9900d35a407b69f9274b2b9976f11de9507db31b05fbbedb82072b19fa2",
"0x00af54e30658c4ae3cacb35a1aea5811e241e8f9b2297c3af80f7dd497e28e78",
"0x6a3ae1b22e728217e2d2906460188e86c1b1a4520a41e57e7e8e117f10f49d6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

