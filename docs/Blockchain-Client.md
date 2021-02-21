# Blockchain-Client

[![CircleCI](https://circleci.com/gh/proxima-one/ProximaDB.svg?style=svg)](https://circleci.com/gh/proxima-one/ProximaDB)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)


The blockchain client as a general blockchain interface to provide a uniform abstraction of functionality and data organization for different blockchain clients. This generalized blockchain client can wrap 3rd party blockchains, which can then be used interchangeably with any other "wrapped" client from a variety of other blockchains. The client allows for event listening, smart contract calls, block listening, and filtering.

### Blockchain Client Wrappers
- Ethereum

## Quick Start

### Requirements
- npm/yarn
- node

### Installation
`npm install blockchain-client`


## Design
The general blockchain connects the data between blockchains that have different ways of structuring blocks, transactions, and events. It does this by acting as a general wrapper that normalizes these differences between 3rd party blockchain clients.

## Usage
### Import and Initialize blockchain client

```javascript
Using a specific blockchain client

```

### BlockchainListeners
```javascript
\\Using a specific blockchain client

```

###  TransactionListeners
```javascript
\\Using a specific blockchain client

```

### SmartContractListener
(adding event handlers)
```javascript
\\Using a specific blockchain client

```

####  EventListeners
```javascript
\\Using a specific blockchain client

```

## Developing 3rd Party Blockchain Wrappers
Blockchain wrappers can be created and tested using the blockchain client repository. In order to implement these wrappers, it is necessary to match the constraints of the generalized blockchain interface.

### Blockchain Interface

#### Blockchain Listener
- blocks/events
- blockchain info
- info
- transaction listen
- event listen

#### Smart Contract Listener
- smart contract listen
- event listen
- smart contract function call

#### Structures
- Events
- Smart Contract
- Block
- Function call
- Info
- Blockchain info

### Testing Blockchain Wrappers
`npm test`

## Contributing
<!--
This should include:
- Contributing Guidelines
- Code of Conduct
- Good first issues/Pull requests
-->
Read below to learn how you can take part in improving our project.

### Code of Conduct

We have adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text]() so that you can understand what actions will and will not be tolerated.

### Contributing Guide

Read our [contributing guide]() to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues]() that contain bugs which have a relatively limited scope. This is a great place to get started.

## Licensing

This project is licensed under MIT licensing guidelines.
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
