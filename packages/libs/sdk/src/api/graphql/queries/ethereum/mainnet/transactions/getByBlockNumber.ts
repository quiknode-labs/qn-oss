import { gql } from '@urql/core';
import { TransactionsByBlockNumber } from '../../../fragments/getTransactionsByBlockNumber';

export const EthMainnetTransactionsByBlockNumber = gql`
  query EthMainnetTransactionsByBlockNumber($filter: TransactionsFilterInput!, $first: Int, $after: String) {
    ethereum {
      ...TransactionsByBlockNumber
    }
    ${TransactionsByBlockNumber}
  }
`;
