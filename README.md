# This repo is a collection of tools used to deploy smart contract 0x41A0c75F239528E59E80F36fEE0743fb8371DC7D to Ethereum Mainnet on February 14, 2022. 

# On June 1, 2021, I was given exclusive access to a high-traffic 3-letter domain name.

After kicking around with it for a few months and posting some of my written and visual arts, I teamed up with 2 friends to launch an NFT. This NFT was special; it allowed to user to generate and access an exclusive email address at the domain, and to transfer that address via the blockchain. This project was called "Assmail".

# TESTING WITH GANACHE

## Run an instance of ganache (local test platform for blockchain) with:

$ npx ganache-cli --deterministic

By default, this uses port 8545 for listening.

## In another CMD window pointed in the contract's directory, run: 

$ npx oz deploy

## Let the test contract be named something other than the final contract.

## To run a function on the local test blockchain, you'll need to send a command using npx. tx, or txn, is shorthand for "transaction". Running command below will let user select which running instance they'd like to use. 

$ npx ox send-tx

## Rinkeby is a functional blockchain for testing smart contracts and deployment processes.

Address of one test can be found on Rinkeby at: 0xb62e5b1705A774A2bC000E4ab706d6b78aADF143

## To connect to my account for sending txns via console:

$ npx truffle console --network rinkeby

In JS: var accounts = web3.eth.getAccounts(); 

## Run this to verify on etherscan with my API key (called in my truffle config)

$ npx truffle run verify adc9 --network rinkeby

# DEPLOYING IN PRODUCTION

**Test one last time...**

npx oz deploy

## Deploy. Make sure truffle-config.js gas variables are set properly.

npx truffle migrate -f 1 --network mainnet

## After confirming presence on Etherscan.io, verify the deployed code using the following command:

npx truffle run verify Assmail2022 --network mainnet

## Insert the .abi (from Etherscan) into the '.abi' file in the javascript directory.

## The sale initializes closed, so we can still perform our 'dirtythirty' (owner-only)_ mints and distribute them.

$ node adc_specialmint.js

## To enable public interaction with allowed functions, the "toggle_sale" function is run by the contract owner.

## New users can now interact with and mint tokens on the Ethereum blockchain by calling the function "mint_assmail".