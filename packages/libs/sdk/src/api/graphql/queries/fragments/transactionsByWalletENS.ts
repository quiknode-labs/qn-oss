import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsByWalletENS = gql`
  fragment TransactionsByWalletENS on EVMSchemaType {
    walletByENS(ensName: $ensName) {
      address
      ensName
      transactions(first: $first, after: $after) {
        edges {
          node {
            ...TransactionsNode
          }
        }
        pageInfo {
          ...Pagination
        }
      }
    }
  }
  ${TransactionsNode}
  ${Pagination}
`;
