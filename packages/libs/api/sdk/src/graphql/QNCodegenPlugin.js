// Handles codegen for QN GraphQL queries generating multiple chains

module.exports = {
  plugin(schema, documents, config) {
    return documents.map((doc) => {
      //console.log('doc')
      //console.log(JSON.stringify(doc.document, null, 2));
    });
  },
};
