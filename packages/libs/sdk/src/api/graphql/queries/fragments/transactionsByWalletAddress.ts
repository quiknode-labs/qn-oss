import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsByWalletAddress = gql`
  fragment TransactionsByWalletAddress on EVMSchemaType {
    walletByAddress(address: $address) {
      __typename
      address
      ensName
      transactions(first: $first, before: $before, after: $after) {
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
