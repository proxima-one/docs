

# Proxima Project Creation

Creating a project.

<!--

init

generate

build

run

publish
remove
deploy
-->

### Requirements 
Before installing and using the Proxima Command-line interface it is necessary to have: 
- Go 
- Docker 
- npm/yarn

#### Install Proxima Command-line-interface

```
yarn add -g proxima-cli
```

## Initialize Your Project

```
proxima init PROJECT_NAME
```

Proxima will initialize an output directory for your project, with the correct structure to begin the project.
```
PROJECT_NAME
+ abi
  - abi files here
+ schema
  - schema files here
app_config.yml
```

ABI 
```
+ contracts
  - smartcontract1_name.json
  - smartcontract2_name.json
```
Schema 
GraphQL Schema 

App Config 

For now we look at the config.yml to include the contract address, the abi code, and datasource.


```yaml
name: [smart contract name]
abi: ./abi/idex_abi.json
contract: '0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208'
datasource: Ethereum
id: ID
owner: Owner
```
## Generating project code
Before rtunning generate ensure that the app_config.yml, the abi, and the schema. 

```
proxima generate .
```

This generates the smart contract handlers (shown in DApp aggregator, and entities)

Output Directory
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


## Building Project
```
proxima build .
```
- config setup
- remote building of the container ...
- if local then pulls dockerfiles, builds the containers, tags them
- creates the docker compose file
- creates the ID and address


## Running the project

### Starting
```
proxima start ID/NAME
```

```
Starting the node....
Server is running on http://localhost:4000
```

### Stopping
```
proxima stop ID/NAME
```

```
Stopping the node....
Server is running on http://localhost:4000
```

### Deploying the project
```
proxima deploy ID/NAME
```

Response of success, with id/name

### Pulling previous project
```
proxima pull ID/NAME
```


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
