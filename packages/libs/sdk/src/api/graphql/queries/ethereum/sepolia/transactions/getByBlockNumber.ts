import { gql } from '@urql/core';
import { TransactionsByBlockNumber } from '../../../fragments/getTransactionsByBlockNumber';

export const EthSepoliaTransactionsByBlockNumber = gql`
  query EthSepoliaTransactionsByBlockNumber(
    $filter: TransactionsFilterInput!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...TransactionsByBlockNumber
    }
  }
  ${TransactionsByBlockNumber}
`;
