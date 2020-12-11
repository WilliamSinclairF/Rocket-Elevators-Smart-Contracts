import Web3 from 'web3';
import QualityTest from './contracts/QualityTest.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3('ws://localhost:7545'),
  },
  contracts: [QualityTest],
  events: {
    QualityTest: ['BuildingCreated'],
  },
};

export default options;
