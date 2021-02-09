
//Get The Files and their names
//import from .vuepress config.js
const fs = require("fs-extra")
const fetch = require('node-fetch');
//url get


//map

let externalDocs = {'ProximaDB': "https://raw.githubusercontent.com/proxima-one/ProximaDB/master/README.md",
'Proxima-SDK': "https://raw.githubusercontent.com/proxima-one/proxima-sdk-js/master/README.md",
'CLI': "https://raw.githubusercontent.com/proxima-one/proxima-cli/master/Readme.md",
'Proxima-Node': "https://raw.githubusercontent.com/proxima-one/proxima-node/master/README.md",
'Data-Vertex': "https://raw.githubusercontent.com/proxima-one/data-vertex/master/README.md",
'Data-Aggregator': "https://raw.githubusercontent.com/proxima-one/data-aggregator/master/README.md",
'Blockchain-Client': "https://raw.githubusercontent.com/proxima-one/blockchain-Client/master/README.md",
"Proxima Mesh": "https://raw.githubusercontent.com/proxima-one/proxima-mesh/master/README.md",
"Research":  "https://raw.githubusercontent.com/proxima-one/research/master/README.md",
}

//doc_config (want the map)
async function main() {
for (let [name, document_url] of Object.entries(externalDocs)) {
  let markdownFilePath = "./docs/" + name + ".md"
  fetch(document_url)
    .then(response => response.text())
    .then(result => fs.outputFileSync(markdownFilePath, result));
  //process markdown file
  //
  //
  // let markDownFile = //get the stuff

}
}

main()
