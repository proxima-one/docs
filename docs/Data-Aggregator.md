# Data Aggregator

[![CircleCI](https://circleci.com/gh/proxima-one/ProximaDB.svg?style=svg)](https://circleci.com/gh/proxima-one/ProximaDB)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
The data aggregator is responsible for the accumulation and transformation of blockchain events through datasources, and then pushing these updates to the data vertex.

### Requirements
- node
- docker
- golang
- docker compose
- npm/yarn

### Installation

```
yarn add data-aggregator
```
### Usage
The data aggregator is best utilized, as an extension of the Proxima CLI, which builds a data aggregator for each Data Vertex.

```
Data Aggregator
- index.js
- Datasources
  - Blockchain-Clients
  - ABI
- Event Handlers
- app_config.yml
```

- Folder set-up

### Running
```
npm start
```

### Testing
```
npm test
```

## Design
The Data Aggregator is designed to pull data from datasources, transform the events, and then pushing updates to its given data vertex. To do this, it utilizes the Proxima SDK, and a combination of datasources with given blockchain clients and their respective event handlers.


<!--

init()

addDatasource()

addDatasourceTemplate()

start()

stop()


Datasource
//Config
Contains data input
Contains handlers
Takes in multiple datasources, app config, and any other information requirements

- Handlers are attached to the datasource
Data sources
Blockchain Clients  
Event handlers


Documentation

Installation

Running
-->



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
