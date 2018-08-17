import Web3 from "web3";

// assumes Metamask has already injected an instance of provider into the page
// const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/4ea78ae802fa4b99b10ac6c933649dd8"
  );
  web3 = new Web3(provider);
}

export default web3;
