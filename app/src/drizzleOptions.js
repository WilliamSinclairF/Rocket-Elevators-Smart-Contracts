import Web3 from 'web3';
import QualityTest from './contracts/QualityTest.json';
import MaterialProvider from './contracts/MaterialProvider.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3('ws://localhost:7545'),
  },
  contracts: [QualityTest, MaterialProvider],
  events: {
    QualityTest: ['BuildingCreated'],
    MaterialProvider: ['OrderCreated'],
  },
};

export default options;
