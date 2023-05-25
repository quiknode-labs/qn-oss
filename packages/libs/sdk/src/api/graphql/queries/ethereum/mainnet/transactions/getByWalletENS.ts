import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const EthMainnetTransactionsByWalletENS = gql`
  query EthMainnetTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    ethereum {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
