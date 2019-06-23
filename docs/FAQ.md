# Considerations and Questions

_There are a variety of different security considerations that must be addressed within Proxima._

## Why use a trie?

Tries are used because they represent a data structure that is sorted and deterministic. This means that synchorinzations can occur in a distirbuted fashion (order of updates will not matter), and range queries can be done.

## Can audits or queries be fooled?

Audits cannot be fooled, but it is possible to provide data structures that are manipulated. An example of this would be changing the values of in a transaction, but keeping the id and signature. This is easily fixed, by providin a verification function for entities to ensure that the data is consistent and correct. For the transaction example, the verification function would ensure that the signature and the hash are correct in the transaction.

## How are the Merkle roots of the subgraphs anchored? Do they need to be anchored to some chain?

Subgraph roots can be "anchored" or snapshotted and then sent to a chain or immutable data source. While subgraphs do not need consensus for queries and updates, it does provide benefit for efficiency to have an immutable source of truth for the root of the subgraph. By anchoring the database of a subgraph, it is possible to lower the number of audits needed, and to reduce the number of checks.

The important consideration for this is that roots can be different, and posted for each query node. Since each subgraph can be auditted, it is possible to discern the malicious actor, without consensus, based on diffs on the merkle roots.

## Is it possible to send bad data, stale data, or validate from an incorrect Merkle root?

The data is based on the merkle root of the subgraph. If the root of the subgraph cannot be tied back to the last anchor, there will be an issue with the audits. This means that there is an upper limit on how "stale" the data can be, (the max time between subgraph snapshots).

The anchoring aspect also means that subgraphs will not be able to readily use different Merkle roots, and that this data must be validated from the Merkle root presented by the subgraph in the anchor (or a derivate Merkle root from it).

## What occurs in the instance of a blockchain fork/data?

When a blockchain is forked, the blocks that are associated with the fork are no longer a valid part of the chain. Since these blocks are no longer able to be tied to the block head, all information that relies on them for verification will no longer be correct. Due to the inability to audit this information by the subgraphs and the queries, the information will no longer be presented in queries.

## Do subgraphs verify data and audit data before they push the data into the database?

Yes, it is necessary for a subgraph to verify data sources and data before they push their data into the file. Each entity should come with a verification mechanism, for a block in a blockchain it would be to take the hash of the block. Before a node adds any piece of data to their database, it is necessary (built-in) for them to verify this data first. Along with verification, it is also necessary for these nodes to conduct the first audit on the entity before adding it to the database.

## How are these subgraphs given data?

As stated previously, subgraphs get information from datasources. These datasources can be subgraphs, or external data sources. In the case of external data sources, subgraphs need to have access to the api for the data source, or they need to be able to synchronize/get updates from subgraphs that have access to these data sources.

## How expensive are audits?

Audits require an extra "query", this does mean that they _can_ be expensive if used for every single entity within a query. To combat this cost, there are ways to optimize the time of each audit (batching, location of subgraphs), but the true optimization lies in use. Since subgraphs represent an authenticated database and each query is validated from the same Merkle root, Proxima Query Nodes cannot give multiple different data for the same query. This means that Proxima Nodes will have to give the same incorrect query for each node if it cheats or acts maliciously. It also means that once a query has been audited it adds security for every query that uses the same node (ensuring that the Merkle root is correct). The greater the volume of queries that are going to a subgraph, the lower amount of audits need to be done. In the end, for datasets that are used often will become faster and more secure.


## What is the genesis of Proxima?  How did it occur to you to use Urkel tree to create an efficient data layer for the blockchain?

Proxima was conceived because of issues with data availability, security, and developer integration for blockchains. None of the toolsets at present, are able to provide a traditional development experience without compromising on security or performance.

Urkel was chosen over other data structures/libraries (like Patricia Merkle Trie)  because it was built as a database, not on top of another database. This makes it more performant than other blockchain systems.

We are currently in the process of moving the Urkel DB to a more generalized scope so that it can be implemented with arbitrary key lengths, greater flexibility with data structures, and standardized error codes.

## Can you tell us what Urkel tree is and how it is used in Handshake?

The Urkel tree is a flat-file Merkle Tree, it looks similar in nature to Sorted String Tables, except instead of having the classic B+ tree as an indexing mechanism, it has a Merkle Trie. It was developed to provide shorter proofs and higher throughput for reads/writes than the traditional implementations.

Handshake protocol uses the Urkel database as an authenticated structure to store their certificates and domain data for their naming service. This functionality is similar to the Google Certificate Transparency database Trillian (https://github.com/google/trillian).

## Can you walk us through the present way(s) that Dapp developers are retrieving data from the blockchain today?  How would it be different after Proxima is implemented?

In the current situation DApp developers can get data from a blockchain in several ways:

- `A full node:` high expense, security is maintained, performance is low
- `A trusted provider:` low expense, loss of security, performance is good
- `Consensus-driven queries:`  mid expensive, loss of security, performance is medium

All of these methods trade off on security vs expense and performance. Where the only way to truly preserve the security of a blockchain is by running a full node. This defeats the purpose of using a blockchain for secure interactions. Through Proxima, the data can be audited so that it can be tied back to the blockchain that created it.

## How does Proxima deal with different types of data in the smart contract?

Proxima handles different data types by including its own set of schema and data type support. Values placed into the ProximaDB are cast to bytes but retrieved as JSON. This can be further augmented with blockchain-specific deserialization/serialization of data.

## Would Proxima work with DAGs?

Since Proxima relies on auditing the blockchains themselves, the risk factors for this type of integration would be the consensus of the DAG itself. If transactions can be cryptographically tied to the DAG, then Proxima can use this relation when it audits the data.  For standard blockchains, this is easy because each transaction is a part of the Merkle Hash of a single block that is mined through signatures or PoW.


## How are range queries, filters, and other database operations proven through the ProximaDB?

At this point, the ProximaDB supplies a Proof-of-soundness for all queries (Range queries, filters, etc). This proof ensures that all data given is in the database. Further additions to the protocol involve including Proofs-of-Completeness, where it can be proven that the data given in a query is all of the data that matches a filter or range.

This problem incorporates two subsets:

- Range Queries
  Ranges can be proven to be complete by looking at the ends of a sorted Merkle Trie, and building a partial Merkle Trie from it. This shows that there is no element outside of the desired range, and allows the querier to prove that every element within the query can build the partial tree. This topic has been breached in the Google [Sparse Merkle Trie](https://github.com/google/trillian), and [github discussions](https://gist.github.com/chris-belcher/eb9abe417d74a7b5f20aabe6bff10de0). In this case, we use a Merkle trie (a deterministically sorted tree) to ensure sorting, and we submit range queries to the keys.

- Filter Queries
  Filters where multiple requirements can be met, can be done by indexing an entity according to multiple constraints, submitting range queries to these different indexes and then doing a union or intersection based on the results of these queries.

One difficulty of this approach is the difficulty of combining multiple range queries at the same time. There have been several approaches that utilize accumulators and aggregate functions to provide [efficient nonmembership proofs](https://www.cs.purdue.edu/homes/ninghui/papers/accumulator_acns07.pdf). The naive approach would be to include every element in the ranges with their proofs for membership/nonmembership. The proof would include the subset of all the entities that matched the requirements, and a set of those that do not. Proofs could be derived by checking membership/nonmembership for all filters.

A potential alternative would be to encrypt the data via a homomorphic encryption of the [entire entity schema](https://www.math.u-bordeaux.fr/~gcastagn/publi/isit_homo.pdf), and to perform the boolean operations on the encrypted schema and filter. In cases where privacy is necessary, this is a powerful alternative.
