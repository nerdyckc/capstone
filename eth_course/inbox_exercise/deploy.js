const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
// interface - ABI
// bytecode - compiled contract
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'express clean uncover tumble strike account crush paddle whale cushion film pioneer',
  'https://rinkeby.infura.io/v3/e090ab77bbe446e597ee121b9e4e2cc0'
);
const web3 = new Web3(provider);


console.log("ABI: ", JSON.parse(interface));
console.log("bytecode: ", bytecode);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0])
  // console.log('bytecode: ' + bytecode)

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
// deploy();