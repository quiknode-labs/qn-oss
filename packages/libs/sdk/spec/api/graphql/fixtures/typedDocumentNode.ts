import { TypedDocumentNode } from '@urql/core';

export const transactionsBySearch = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {
        kind: 'Name',
        value: 'EthMainnetTransactionsBySearch',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'filter',
            },
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'TransactionsFilterInput',
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'first',
            },
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Int',
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'before',
            },
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'after',
            },
          },
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'String',
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'ethereum',
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'TransactionsBySearch',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'TransactionsNode',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Transaction',
        },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'blockNumber',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'blockTimestamp',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'contractAddress',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'fromAddress',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'cumulativeGasUsed',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'effectiveGasPrice',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'gas',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'gasPrice',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'gasUsed',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'hash',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'maxFeePerGas',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'maxPriorityFeePerGas',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'toAddress',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'type',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'input',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'transactionIndex',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'value',
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'Pagination',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'PageInfo',
        },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'endCursor',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'hasNextPage',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'hasPreviousPage',
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'startCursor',
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'TransactionsBySearch',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'EVMSchemaType',
        },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'transactions',
            },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'filter',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'filter',
                  },
                },
              },
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'before',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'before',
                  },
                },
              },
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'after',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'after',
                  },
                },
              },
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'first',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'first',
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'edges',
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'node',
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'TransactionsNode',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'pageInfo',
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'Pagination',
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
    },
  ],
  loc: {
    start: 0,
    end: 777,
    source: {
      body: 'query EthMainnetTransactionsBySearch($filter: TransactionsFilterInput, $first: Int, $before: String, $after: String) {\n  ethereum {\n    ...TransactionsBySearch\n  }\n}\nfragment TransactionsNode on Transaction {\n  blockNumber\n  blockTimestamp\n  contractAddress\n  fromAddress\n  cumulativeGasUsed\n  effectiveGasPrice\n  gas\n  gasPrice\n  gasUsed\n  hash\n  maxFeePerGas\n  maxPriorityFeePerGas\n  toAddress\n  type\n  input\n  transactionIndex\n  value\n}\nfragment Pagination on PageInfo {\n  endCursor\n  hasNextPage\n  hasPreviousPage\n  startCursor\n}\nfragment TransactionsBySearch on EVMSchemaType {\n  transactions(filter: $filter, before: $before, after: $after, first: $first) {\n    edges {\n      node {\n        ...TransactionsNode\n      }\n    }\n    pageInfo {\n      ...Pagination\n    }\n  }\n}',
      name: 'gql',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
  __key: 8658763134,
} as unknown as TypedDocumentNode;
