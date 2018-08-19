import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// when working with existing contracts, pass in the contract
// interface (ABI) and campaign address as arguments
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2c854C2c9B6E738C7ccF0B18bbE4bAa1042AD2b0"
);

export default instance;
