

# Proxima CLI

[![CircleCI](https://circleci.com/gh/proxima-one/ProximaDB.svg?style=svg)](https://circleci.com/gh/proxima-one/ProximaDB)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

The Proxima Command-line interface (CLI) enables the fast and efficient, initialization, generation, testing, and deployment of data vertices. It is also where developers will be able to manage their identity, run nodes, and scale data.

<!--

init

generate

build

run

publish
remove
deploy
-->

## Quick Start


### Requirements
- node
- docker
- golang
- docker compose
- npm/yarn

### Installation

```
yarn add -g proxima-cli
```

## Usage

### version
```
proxima version
```

### help
```
proxima help
```

### init
This initializes the data vertex of the given name. This includes the project folder, the app config, and the schema.

```
proxima init DATA_VERTEX_NAME
```
Schema
GraphQL Schema

> **Note** In order to go on to the next step and *generate* the data vertex it is necessary for the developer to add in the abi, the schema, and to update the app_config to include the datasources used by the data vertex.

```
PROJECT_NAME
+ contracts
  - abi files here
+ schema
  - schema files here
- app_config.yml
```

### generate
This generates the smart contract handler templates and the data aggregator used by the data vertex, as well as the database entities that are used in the data vertex.

```
proxima generate .
```

> **Note** In order to go on to the next step and *build* the data vertex it is necessary for the developer to fill out the function handlers for the data vertex.

```
PROJECT_NAME

+ DApp aggregator
  - smartcontract1_name
    - functionHandlers
    - eventHandlers
  - smartcontract2_name
    - ...
    - ...
```

### build
This builds the data vertex and its resolvers, as well as the docker-compose file that can be used to run the data vertex.

```
proxima build
## Building Project
```
proxima build .
```


### run

```
proxima start ID/NAME
```

```
Starting the node....
Server is running on http://localhost:4000
```

## stop

```
proxima stop ID/NAME
```

```
Stopping the node....
Server is running on http://localhost:4000
```

### test

```
proxima test
```
The test component of the Proxima CLI has the potential to perform tests on a variety of components.
- Proxima Data Vertex SDK Plug-in
- Data Vertex
- Data Aggregator

### benchmark
**TO BE IMPLEMENTED**
```
proxima benchmark ID/NAME [args]
```


### deploy
**TO BE IMPLEMENTED**
```
proxima deploy ID/NAME
```


### pull
**TO BE IMPLEMENTED**

```
proxima pull ID/NAME
```




## Important Structures
Within the [Data Vertex Name] directory:

```
+ Data Aggregator
+ Data Vertex
+ Database
+ Proxima SDK
- docker-compose.yml

+ schema
+ handlers
+ abi
- app_config.yml
```


### ABI
The abi folder contains the raw json abi of the various smart contracts used.
```
+ abi
  - smartcontract1_name.json
  - smartcontract2_name.json
```

### Schema
The schema represents the graphql entities that are written by the developer. The CLI will automatically generate graphql query and mutation operations for these.
```
+ schema
  - schema.graphql
```

### Handlers
The handlers folder contains the event handlers for the data vertex. These are responsible for taking in the blockchain events, and pushing them to the data vertex.

### App Config
For now we look at the app_config.yml to include the contract address, the abi code, and datasource.

```yaml
name: [smart contract name]
abi: ./abi/idex_abi.json
contract: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208'
datasource: Ethereum
id: ID
owner: Owner
```

<!--
This should include:
- Contributing Guidelines
- Code of Conduct
- Good first issues/Pull requests


## Advanced Configurations

### Database

```yaml
name: [YOUR Name]
abi: ./abi/idex_abi.json
contract: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208'
datasource: Ethereum
id: ID
owner: Owner
```

### Cache
```yaml
name: [YOUR Name]
abi: ./abi/idex_abi.json
contract: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208'
datasource: Ethereum
id: ID
owner: Owner
```

### Client
```yaml
name: [YOUR Name]
abi: ./abi/idex_abi.json
contract: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208'
datasource: Ethereum
id: ID
owner: Owner
```
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
