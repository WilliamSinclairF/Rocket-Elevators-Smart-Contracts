# Rocket Elevators - Smart Contracts & Dapp

## Info

The focus of the project was around the Quality Testing/Control aspect of the Rocket Elevators supply chain. Another contract, contributed by Kem was later added for fun.

The buildings.json file found in the app folder contains the fictional data that the company could be using in a real world environment.

## How to set up the app

- run `npm install` from root folder
- cd to the 'app' folder & run `npm install` again
- ensure you have Ganache open and running on port 7545
- configure Metamask to use the same port, running on localhost
- run `truffle migrate --network develop --reset` in the root folder
- run  `cd app && npm run start` - This should start the React dev server and the app should open in your browser.

## Other useful commands

- Compile:
  - `truffle compile`
- Migrate:
  - `truffle migrate`
- Test contracts:
  - `truffle test`
- Test dapp:
  - `cd app && npm test`
- Run dev server:
  - `cd app && npm run start`
- Build for production:
  - `cd app && npm run build`

Made by Loic and William, thanks to Kem for supplying the code for the materials smart contract
