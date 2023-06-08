import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const EthSepoliaTransactionsByWalletENS = gql`
  query EthSepoliaTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $before: String
    $after: String
  ) {
    ethereumSepolia {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
