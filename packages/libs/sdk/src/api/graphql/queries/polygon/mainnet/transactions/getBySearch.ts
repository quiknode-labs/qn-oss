import { gql } from '@urql/core';
import { TransactionsBySearch } from '../../../fragments/getTransactionsBySearch';

export const PolygonMainnetTransactionsBySearch = gql`
  query PolygonMainnetTransactionsBySearch(
    $filter: TransactionsFilterInput
    $first: Int
    $before: String
    $after: String
  ) {
    polygon {
      ...TransactionsBySearch
    }
  }
  ${TransactionsBySearch}
`;
