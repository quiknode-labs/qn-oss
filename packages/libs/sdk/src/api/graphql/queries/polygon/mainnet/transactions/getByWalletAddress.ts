import { gql } from '@urql/core';
import { GetTransactionsByWalletAddressFragment } from '../../../fragments/getTransactionsByWalletAddress';

export const PolygonMainnetTransactionsByWalletAddress = gql`
  query PolygonMainnetTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
    $orderDirection: OrderDirection
  ) {
    polygon {
      ...GetTransactionsByWalletAddressFragment
    }
  }
  ${GetTransactionsByWalletAddressFragment}
`;
