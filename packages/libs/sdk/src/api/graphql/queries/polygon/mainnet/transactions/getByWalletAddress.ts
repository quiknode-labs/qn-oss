import { gql } from '@urql/core';
import { TransactionsByWalletAddress } from '../../../fragments/transactionsByWalletAddress';

export const PolygonMainnetTransactionsByWalletAddress = gql`
  query PolygonMainnetTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    polygon {
      ...TransactionsByWalletAddress
    }
  }
  ${TransactionsByWalletAddress}
`;
