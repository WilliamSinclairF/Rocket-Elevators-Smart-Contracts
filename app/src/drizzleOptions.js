import Web3 from 'web3';
import ComplexStorage from './contracts/ComplexStorage.json';
import SimpleStorage from './contracts/SimpleStorage.json';
import TutorialToken from './contracts/TutorialToken.json';
import QualityTest from './contracts/QualityTest.json';

const options = {
  web3: {
    block: true,
    customProvider: new Web3('ws://localhost:7545'),
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, QualityTest],
  events: {
    SimpleStorage: ['StorageSet'],
  },
};

export default options;
