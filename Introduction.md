# Introduction

## What do we do?
Blockchain data is tough to truly authenticate. 
How do you know that you are getting accurate and sound data from the correct blockchain? You have no idea if the data coming from your account balance, query, or Decentralized application events are accurate and timely. The result can lead to major issues with visibility, analytics, and finances within your business. It can mean the difference between (a popping phrase for success here) or failure. 


### Examples

- Did my user pay? What are the interest rates? 

- How many users are there? What do my orders look like? 

- What is my account balance? What transactions have I been a part of?


When dealing with data security it is not enough to “trust”. Ora protocol provides the convenience, feature set, and speed of centralized providers AND maintains the audibility and trustlessness of the blockchain.

## Our goal 
Decentralize the ability to provide data, interact with data to empower DApp developers, provide tools that speed up the creation of DApps, and drive adoption of blockchain technology. Our solution is general enough to enable our decentralized data providers to provide data for DApps for several blockchains / smart contract platforms.

## How do we do it?
Ora Protocol provides default mapping of events and stores them within an authenticated data store, giving developers the ability to query this through a graphQL interface. Queries are done through a specialized node that uses an authenticated data store to provide a Merkle-proof for the query. To ensure the security of the data, Ora leaves an auditable trail for DApp developers to trace the path of their data to its source. We cannot change the authenticated data structure, so security does not have to be re-tried by each new user.


## Deployment
Deploy to our hosting DNS service through a manifest that defines data sources, contracts, and any extra mappings. This manifest is deployed to the IPNS, to enable deployment to the mesh as well as deployment to our own hosting solution. We provide default event mappings for every developer so there is no setup needed aside from listing the contract ABI code, the data source, and the address.

## Features
- Events, State
Filtering* (soundness, not completeness)
Range* (soundness, not completeness)
Blockchain agnostic
Authenticated Datastore
The Ora Protocol uses Ruffle, a bolt-on component of the powerful Urkel NoSQL database, that implements a Flat-File Merkle Trie. We utilize the Flat-File Merkle Trie, like see in Urkel, because of the query speed (>1 ms), the reduced size of the proofs (>1kb), as well as the low storage footprint. 

Along with adding features like range queries and load-balancing, Ruffle provides the default authentication and performance seen in the Urkel database. Our data store provides Merkle proofs for data to ensure the authenticity and immutability of all data within it.
Auditing 
The blocks of a blockchain are immutable, but blocks are only linked to their immediate neighbors, so the history of the blockchain can only be verified by downloading the entire chain. 
This means that it is only possible to audit data (e.g. transactions, state, and blocks) from a blockchain, by running a full node and synchronizing with every block in the blockchain’s history. 

Our system maintains the same auditing structure of blockchains, but it stores blocks within an authenticated database, so it is possible to verify membership of blocks without downloading the entire history. This enables fast and efficient audits like:

Example Audits

Is this block a part of the Ethereum block? 
Is this transaction really embedded in this block?
Is this state located in the state trie for the current block?


Audits like these can be called within a query to guarantee that the information provided is correct. Audits can also be chained together in a recursive manner, this is known as an audit trail. As our product progresses, audits can be updated and added to improve the security and rigor of the audit itself. 

Audits and audit trails would take a lot of time if they are used for every query. Since the database is authenticated, probabilistic audits can be used by developers in instances where there is a high amount of overlap between queries. This lowers the number of audits needed to be completed for highly used sets while maintaining developer security guarantees. 
