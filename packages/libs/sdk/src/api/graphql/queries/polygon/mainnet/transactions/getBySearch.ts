import { gql } from '@urql/core';
import { TransactionsBySearch } from '../../../fragments/getTransactionsBySearch';

export const PolygonMainnetTransactionsBySearch = gql`
  query PolygonMainnetTransactionsBySearch(
    $filter: TransactionsFilterInput!
    $first: Int
    $after: String
  ) {
    polygon {
      ...TransactionsBySearch
    }
  }
  ${TransactionsBySearch}
`;
