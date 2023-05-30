import { gql } from '@urql/core';
import { TransactionsByBlockNumber } from '../../../fragments/getTransactionsByBlockNumber';

export const PolygonMainnetTransactionsByBlockNumber = gql`
  query PolygonMainnetTransactionsByBlockNumber(
    $filter: TransactionsFilterInput!
    $first: Int
    $after: String
  ) {
    polygon {
      ...TransactionsByBlockNumber
    }
  }
  ${TransactionsByBlockNumber}
`;
