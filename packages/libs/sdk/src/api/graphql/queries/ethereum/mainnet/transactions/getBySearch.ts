import { gql } from '@urql/core';
import { TransactionsBySearch } from '../../../fragments/getTransactionsBySearch';

export const EthMainnetTransactionsBySearch = gql`
  query EthMainnetTransactionsBySearch(
    $filter: TransactionsFilterInput,
    $first: Int,
    $before: String
    $after: String
  ) {
    ethereum {
      ...TransactionsBySearch
    }
    ${TransactionsBySearch}
  }
`;
