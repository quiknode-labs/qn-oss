import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const PolygonMainnetTransactionsByWalletENS = gql`
  query PolygonMainnetTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $before: String
    $after: String
  ) {
    polygon {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
