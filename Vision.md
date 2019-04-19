# Ora Protocol

### The data layer of web 3.0

# Overview
The Ora Protocol combines authenticated datastructures and peer-to-peer topology, to enable the next generation of decentralized infrastructure. It moves away from consensus and instead anchors data spaces to static verification systems, and structuring data in an Authenticated NoSQL database. In doing this, Ora Protocol is able to change the current paradaigm from server-client, to trustless network of data sets. This has several important goals:

- Move towards zero latency
- Serving data to the edge
- Consensusless Reads and Writes

# Features

- ### Authenticated and trustless data spaces
- ### Limitless scalability
- ### Greater security



# Products and Implementations

## Blockchain Index

The first implementation of the Ora Protocol is as a blockchain index. The blocks come through the Ora Node which 

### Example Flow 


## DApp Data


### Example Flow


## Future Releases 

- ## Hybrid Data 

- ## External Data 


# Architecture
The systems works by using three separate parts: 
- *Mesh* 
- *Authenticated Database* 
- *Registry* 

## Mesh (V1)
The mesh is the logic and communication layer for the p2p network. Through the mesh, it is possible to enable faster routing, and secure connections. This is done by establishing neighborhoods, based on proximity rather than random indexes (as seen so often with Kademlia).

> Updates are pushed from the nodes to the mesh, from the mesh they are pushed to neighboring nodes. This means that polling 
> for events are not necessary.

## Authenticated Database (V1)
The authenticated database is responsible for maintaining the structure and authentication of the data in a trustless manner. Through the authenticated database, it is possible to push queries and data to the edge without compromising security. This layer is first in its class and can maintain individual privacy through encryption of values.

## Registry (V1)
The registry is the focal point for the entire protocol. It conrls the anchors for the data spaces, and providers the authentication of the of nodes connected into the mesh. The registry of data spaces (sometimes called services), contains information on bootstraps, the id of the database, and connections to anchor points in order verify the authenticity of the data points for the space.

# Verfication and Security of data

The verification and security of data can be broken down into two different spaces: 
- Anchoring 
- Authentication

## Anchoring (V1)

### Accumulation



### Blockchains

Blockchains are anchored


- ##### Proof-of-Work 
- ##### Proof-of-stake/Proof-of-Authority/Delegated-Proof-of-Stake 

#### Example 


### Signatures

- ##### Signatures 
- ##### Threshold Signatures 
- ##### Access control lists

#### Example 


## Authentication (V1)

The authentication of members of the mesh, and overlay network can be done in several ways, but the current version will support.

### Smart contract-based Authentication
 

### Signature-based Authentication

