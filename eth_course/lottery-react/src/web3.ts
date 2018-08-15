import Web3 from 'web3';

// assumes user has Metamask installed!!
// web3 injected into browser by Metamask
// tslint:disable-next-line:no-string-literal
const web3 = new Web3(window['web3'].currentProvider);
// const web3 = new Web3((window as any).web3.currentProvider);

export default web3;
