import { gql } from '@urql/core';
import { GetBalancesByWalletENSFragment } from '../../../fragments/getBalancesByWalletENS';

export const PolygonMainnetBalancesByWalletENS = gql`
  query PolygonMainnetBalancesByWalletENS(
    $ensName: String!
    $first: Int
    $before: String
    $after: String
  ) {
    polygon {
      ...GetBalancesByWalletENSFragment
    }
  }
  ${GetBalancesByWalletENSFragment}
`;
