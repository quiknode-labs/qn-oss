import { gql } from '@urql/core';
import { TransactionsBySearch } from '../../../fragments/getTransactionsBySearch';

export const EthMainnetTransactionsBySearch = gql`
  query EthMainnetTransactionsBySearch($filter: TransactionsFilterInput!, $first: Int, $after: String) {
    ethereum {
      ...TransactionsBySearch
    }
    ${TransactionsBySearch}
  }
`;
