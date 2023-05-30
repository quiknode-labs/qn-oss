import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsByBlockNumber = gql`
  fragment TransactionsByBlockNumber on EVMSchemaType {
    transactions(filter: $filter, after: $after, first: $first) {
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
  ${TransactionsNode}
  ${Pagination}
`;
