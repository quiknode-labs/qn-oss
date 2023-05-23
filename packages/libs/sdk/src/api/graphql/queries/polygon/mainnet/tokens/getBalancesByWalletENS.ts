import { gql } from '@urql/core';
import { GetBalancesByWalletENSFragment } from '../../../fragments/getBalancesByWalletENS';

export const PolygonMainnetBalancesByWalletENS = gql`
  query PolygonMainnetBalancesByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    polygon {
      ...GetBalancesByWalletENSFragment
    }
  }
  ${GetBalancesByWalletENSFragment}
`;
