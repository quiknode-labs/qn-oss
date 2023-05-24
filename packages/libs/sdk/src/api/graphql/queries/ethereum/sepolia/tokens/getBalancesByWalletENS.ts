import { gql } from '@urql/core';
import { GetBalancesByWalletENSFragment } from '../../../fragments/getBalancesByWalletENS';

export const EthSepoliaBalancesByWalletENS = gql`
  query EthSepoliaBalancesByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    ethereumSepolia {
      ...GetBalancesByWalletENSFragment
    }
  }
  ${GetBalancesByWalletENSFragment}
`;
