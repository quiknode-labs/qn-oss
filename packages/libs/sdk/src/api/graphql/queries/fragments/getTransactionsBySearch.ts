import { gql } from '@urql/core';
import { Pagination } from './pagination';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsBySearch = gql`
  fragment TransactionsBySearch on EVMSchemaType {
    transactions(
      filter: $filter
      before: $before
      after: $after
      first: $first
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
  ${TransactionsNode}
  ${Pagination}
`;
