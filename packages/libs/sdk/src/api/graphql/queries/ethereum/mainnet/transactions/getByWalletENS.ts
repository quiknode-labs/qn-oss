import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const EthMainnetTransactionsByWalletENS = gql`
  query EthMainnetTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $before: String
    $after: String
  ) {
    ethereum {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
