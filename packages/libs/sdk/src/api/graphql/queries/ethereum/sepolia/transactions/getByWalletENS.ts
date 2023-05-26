import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const EthSepoliaTransactionsByWalletENS = gql`
  query EthSepoliaTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
