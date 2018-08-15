const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  /* web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
  }) */
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))  // Teaches web3 about what methods an Inbox contract has
    .deploy({ data: "0x" + bytecode, arguments: ['Hi there!'] })     // Tells web3 that we want to deploy a new copy of this contract
    .send({ from: accounts[0], gas: '1000000' });             // Instructs web3 to send out a transaction that creates this contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); // assert --> check this is a defined value
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();   // call method on contract
    assert.equal(message, 'Hi there!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });   // sending a transaction (modifying data)
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});