import { gql } from '@urql/core';
import { GetBalancesByWalletAddressFragment } from '../../../fragments/getBalancesByWalletAddress';

export const PolygonMainnetBalancesByWalletAddress = gql`
  query PolygonMainnetBalancesByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    polygon {
      ...GetBalancesByWalletAddressFragment
    }
  }
  ${GetBalancesByWalletAddressFragment}
`;
