import { gql } from '@urql/core';
import { TransactionsByWalletENS } from '../../../fragments/transactionsByWalletENS';

export const PolygonMainnetTransactionsByWalletENS = gql`
  query PolygonMainnetTransactionsByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    polygon {
      ...TransactionsByWalletENS
    }
  }
  ${TransactionsByWalletENS}
`;
