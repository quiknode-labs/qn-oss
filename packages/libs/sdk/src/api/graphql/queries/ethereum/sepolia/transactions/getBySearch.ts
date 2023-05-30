import { gql } from '@urql/core';
import { TransactionsBySearch } from '../../../fragments/getTransactionsBySearch';

export const EthSepoliaTransactionsBySearch = gql`
  query EthSepoliaTransactionsBySearch(
    $filter: TransactionsFilterInput!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...TransactionsBySearch
    }
  }
  ${TransactionsBySearch}
`;
