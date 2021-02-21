# Data Vertex

[![CircleCI](https://circleci.com/gh/proxima-one/ProximaDB.svg?style=svg)](https://circleci.com/gh/proxima-one/ProximaDB)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

The data vertex handles the requests, updates and maintenance of the decentralized application data index. Developers create data vertices to aggregate, transform and serve indexed data from a blockchain datasource.



## Quick Start
For further information and functionality look at the proxima command-line interface.

### Requirements
- node
- docker
- docker compose
- go
- git

### Installation
`git clone https://github.com/proxima-one/data-vertex.git`

### Set-up
The data vertex needs to be set-up such that the database config, the resolvers, and the schema match the requirements of the specified vertex. This is done automatically through the Proxima CLI.

### Running

Before the data vertex can be run, it must have a docker-compose file that includes the database, the data vertex, and the data aggregator.

`docker-compose up`

The data vertex should be running on:
`0.0.0.0:4000`

### Testing

`go test`

### Benchmarking

**To be implemented**

<!--
## Structure and interactions
A data vertex stores DApp data in a graphql interface using a specialized set of eventhandlers, resovlers, and a database designed to host the files.
## Running
`docker-compose up`

## Testing
`docker-compose up test`

## Benchmarking
`docker-compose up benchmarks`
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
