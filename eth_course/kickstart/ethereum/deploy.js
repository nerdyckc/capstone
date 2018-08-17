const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "express clean uncover tumble strike account crush paddle whale cushion film pioneer",
  "https://rinkeby.infura.io/v3/4ea78ae802fa4b99b10ac6c933649dd8"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ gasLimit: "1000000", gasPrice: "1000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
