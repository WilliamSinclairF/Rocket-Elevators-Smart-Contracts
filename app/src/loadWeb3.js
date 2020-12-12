import Web3 from 'web3';

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      'Non-Ethereum browser detected. You should consider trying MetaMask!'
    );
  }
};

export const getAccount = () => {
  Web3.eth.getAccounts(function (err, accounts) {
    if (err !== null) console.error('An error occurred: ' + err);
    else if (accounts.length === 0)
      console.log('User is not logged in to MetaMask');
    else console.log('User is logged in to MetaMask');
  });
};
