import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsByWalletAddress = gql`
  fragment TransactionsByWalletAddress on EVMSchemaType {
    walletByAddress(address: $address) {
      address
      ensName
      transactions(
        first: $first
        after: $after
        orderDirection: $orderDirection
      ) {
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
