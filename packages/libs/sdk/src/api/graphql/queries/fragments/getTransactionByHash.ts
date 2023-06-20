import { gql } from '@urql/core';
import { TransactionsNode } from './nodes/TransactionsNode';

export const TransactionsByHash = gql`
  fragment TransactionsByHash on EVMSchemaType {
    transaction(hash: $hash) {
      ...TransactionsNode
    }
  }
  ${TransactionsNode}
`;
