import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

// when working with existing contracts, pass in the contract
// interface (ABI) and campaign address as arguments
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x79c63B4353400Cb9170f76551916c3377Bb2ED0E"
);

export default instance;
