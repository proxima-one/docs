# Ora Protocol

### The data layer of web 3.0

The Ora Protocol combines authenticated datastructures and peer-to-peer topology, to enable the next generation of decentralized infrastructure. It moves away from consensus and instead anchors data spaces to static verification systems, and structuring data in an Authenticated NoSQL database. 

![](overview.png)

In doing this, Ora Protocol is able to change the current paradaigm from server-client, to trustless network of data sets. This has several important goals:

- *Move towards zero latency*
- *Serving data to the edge from the edge*
- *Consensusless Reads and Writes*


# Features

- ### Authenticated and trustless data spaces
- ### Limitless scalability
- ### Greater security

# Solution 


## Blockchain Index
The first implementation of the Ora Protocol is as a blockchain index. The blocks come through the Ora Node which 


![](overview.png)

## DApp Data


![](overview.png)


## Future Releases 
- *Hybrid Data* 
- *External Data* 


# Architecture
The systems works by using three separate parts: 
- *Mesh* 
- *Authenticated Database* 
- *Registry* 

![](architecture.png)

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
- *Anchoring*
- *Authentication*

## Anchoring (V1)

Anchoring is used...

![](anchoring.png)


- ##### Proof-of-Work 
- ##### Proof-of-stake/Proof-of-Authority/Delegated-Proof-of-Stake 


### Accumulators


### Recursive Zero Knowledge Proofs
Using recursive zero knowledge proofs with the genesis block, it is possible to prove that a block is in a blockchain.

This works with both types of blockchain and is seen in such projects as Corda. 

### Signatures

Signatures involve the owner(s) of a data space, signing updates in order to give the mesh the ability to verify. In most cases these will be external data sources, but initially blockchains might use signatures as a way for fast verification. 

- *Signatures*
- *Threshold Signatures*
- *BLS Signatures*


### Access control lists 
Instead of having a single governing entity, it is possible to give different members different accesses and verify these. Using this method, transaction throughput and data ownership go hand-in-hand.

## Authentication (V1)
The authentication of members of the mesh, and overlay network can be done in several ways, but the current version will support two forms of authentication. Both of these forms of authentication assume each party has an associated public and private key.

### Smart contract-based Authentication
Smart contract-based authentication involves using a smart contract to mint API/authentication tokens. These tokens will be represented as events, with the smart contract referenced in the registry itself. This enables for secure and trustless creation of authentication tokens.  

```javascript
event(address, address, key, id)
```

### Signature-based Authentication
The signature-based authentication scheme is quite similar to traditional signature tokens. With the owner(s) signing a token associated with the public key of the sender.

```javascript
(address, key, id, signature)
```
