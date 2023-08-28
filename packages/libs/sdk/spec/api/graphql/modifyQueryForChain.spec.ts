import { modifyQueryForChain } from '../../../src/api/graphql/modifyQueryForChain';
import { transactionsBySearch } from './fixtures/typedDocumentNode';

describe('modifyQueryForChain', () => {
  it('should modify the query for the chain', () => {
    const query = modifyQueryForChain('polygon', transactionsBySearch);
    expect(query).toMatchInlineSnapshot(`
      Object {
        "__key": 8658763134,
        "definitions": Array [
          Object {
            "kind": "OperationDefinition",
            "name": Object {
              "kind": "Name",
              "value": "EthMainnetTransactionsBySearch",
            },
            "operation": "query",
            "selectionSet": Object {
              "kind": "SelectionSet",
              "selections": Array [
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "polygon",
                  },
                  "selectionSet": Object {
                    "kind": "SelectionSet",
                    "selections": Array [
                      Object {
                        "kind": "FragmentSpread",
                        "name": Object {
                          "kind": "Name",
                          "value": "TransactionsBySearch",
                        },
                      },
                    ],
                  },
                },
              ],
            },
            "variableDefinitions": Array [
              Object {
                "kind": "VariableDefinition",
                "type": Object {
                  "kind": "NamedType",
                  "name": Object {
                    "kind": "Name",
                    "value": "TransactionsFilterInput",
                  },
                },
                "variable": Object {
                  "kind": "Variable",
                  "name": Object {
                    "kind": "Name",
                    "value": "filter",
                  },
                },
              },
              Object {
                "kind": "VariableDefinition",
                "type": Object {
                  "kind": "NamedType",
                  "name": Object {
                    "kind": "Name",
                    "value": "Int",
                  },
                },
                "variable": Object {
                  "kind": "Variable",
                  "name": Object {
                    "kind": "Name",
                    "value": "first",
                  },
                },
              },
              Object {
                "kind": "VariableDefinition",
                "type": Object {
                  "kind": "NamedType",
                  "name": Object {
                    "kind": "Name",
                    "value": "String",
                  },
                },
                "variable": Object {
                  "kind": "Variable",
                  "name": Object {
                    "kind": "Name",
                    "value": "before",
                  },
                },
              },
              Object {
                "kind": "VariableDefinition",
                "type": Object {
                  "kind": "NamedType",
                  "name": Object {
                    "kind": "Name",
                    "value": "String",
                  },
                },
                "variable": Object {
                  "kind": "Variable",
                  "name": Object {
                    "kind": "Name",
                    "value": "after",
                  },
                },
              },
            ],
          },
          Object {
            "kind": "FragmentDefinition",
            "name": Object {
              "kind": "Name",
              "value": "TransactionsNode",
            },
            "selectionSet": Object {
              "kind": "SelectionSet",
              "selections": Array [
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "blockNumber",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "blockTimestamp",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "contractAddress",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "fromAddress",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "cumulativeGasUsed",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "effectiveGasPrice",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "gas",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "gasPrice",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "gasUsed",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "hash",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "maxFeePerGas",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "maxPriorityFeePerGas",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "toAddress",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "type",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "input",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "transactionIndex",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "value",
                  },
                },
              ],
            },
            "typeCondition": Object {
              "kind": "NamedType",
              "name": Object {
                "kind": "Name",
                "value": "Transaction",
              },
            },
          },
          Object {
            "kind": "FragmentDefinition",
            "name": Object {
              "kind": "Name",
              "value": "Pagination",
            },
            "selectionSet": Object {
              "kind": "SelectionSet",
              "selections": Array [
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "endCursor",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "hasNextPage",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "hasPreviousPage",
                  },
                },
                Object {
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "startCursor",
                  },
                },
              ],
            },
            "typeCondition": Object {
              "kind": "NamedType",
              "name": Object {
                "kind": "Name",
                "value": "PageInfo",
              },
            },
          },
          Object {
            "kind": "FragmentDefinition",
            "name": Object {
              "kind": "Name",
              "value": "TransactionsBySearch",
            },
            "selectionSet": Object {
              "kind": "SelectionSet",
              "selections": Array [
                Object {
                  "arguments": Array [
                    Object {
                      "kind": "Argument",
                      "name": Object {
                        "kind": "Name",
                        "value": "filter",
                      },
                      "value": Object {
                        "kind": "Variable",
                        "name": Object {
                          "kind": "Name",
                          "value": "filter",
                        },
                      },
                    },
                    Object {
                      "kind": "Argument",
                      "name": Object {
                        "kind": "Name",
                        "value": "before",
                      },
                      "value": Object {
                        "kind": "Variable",
                        "name": Object {
                          "kind": "Name",
                          "value": "before",
                        },
                      },
                    },
                    Object {
                      "kind": "Argument",
                      "name": Object {
                        "kind": "Name",
                        "value": "after",
                      },
                      "value": Object {
                        "kind": "Variable",
                        "name": Object {
                          "kind": "Name",
                          "value": "after",
                        },
                      },
                    },
                    Object {
                      "kind": "Argument",
                      "name": Object {
                        "kind": "Name",
                        "value": "first",
                      },
                      "value": Object {
                        "kind": "Variable",
                        "name": Object {
                          "kind": "Name",
                          "value": "first",
                        },
                      },
                    },
                  ],
                  "kind": "Field",
                  "name": Object {
                    "kind": "Name",
                    "value": "transactions",
                  },
                  "selectionSet": Object {
                    "kind": "SelectionSet",
                    "selections": Array [
                      Object {
                        "kind": "Field",
                        "name": Object {
                          "kind": "Name",
                          "value": "edges",
                        },
                        "selectionSet": Object {
                          "kind": "SelectionSet",
                          "selections": Array [
                            Object {
                              "kind": "Field",
                              "name": Object {
                                "kind": "Name",
                                "value": "node",
                              },
                              "selectionSet": Object {
                                "kind": "SelectionSet",
                                "selections": Array [
                                  Object {
                                    "kind": "FragmentSpread",
                                    "name": Object {
                                      "kind": "Name",
                                      "value": "TransactionsNode",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      Object {
                        "kind": "Field",
                        "name": Object {
                          "kind": "Name",
                          "value": "pageInfo",
                        },
                        "selectionSet": Object {
                          "kind": "SelectionSet",
                          "selections": Array [
                            Object {
                              "kind": "FragmentSpread",
                              "name": Object {
                                "kind": "Name",
                                "value": "Pagination",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
            "typeCondition": Object {
              "kind": "NamedType",
              "name": Object {
                "kind": "Name",
                "value": "EVMSchemaType",
              },
            },
          },
        ],
        "kind": "Document",
        "loc": Object {
          "end": 777,
          "source": Object {
            "body": "query EthMainnetTransactionsBySearch($filter: TransactionsFilterInput, $first: Int, $before: String, $after: String) {
        ethereum {
          ...TransactionsBySearch
        }
      }
      fragment TransactionsNode on Transaction {
        blockNumber
        blockTimestamp
        contractAddress
        fromAddress
        cumulativeGasUsed
        effectiveGasPrice
        gas
        gasPrice
        gasUsed
        hash
        maxFeePerGas
        maxPriorityFeePerGas
        toAddress
        type
        input
        transactionIndex
        value
      }
      fragment Pagination on PageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      fragment TransactionsBySearch on EVMSchemaType {
        transactions(filter: $filter, before: $before, after: $after, first: $first) {
          edges {
            node {
              ...TransactionsNode
            }
          }
          pageInfo {
            ...Pagination
          }
        }
      }",
            "locationOffset": Object {
              "column": 1,
              "line": 1,
            },
            "name": "gql",
          },
          "start": 0,
        },
      }
    `);
  });
});
