import { gql } from '@urql/core';
import { GetBalancesByWalletENSFragment } from '../../../fragments/getBalancesByWalletENS';

export const EthMainnetBalancesByWalletENS = gql`
  query EthMainnetBalancesByWalletENS(
    $ensName: String!
    $first: Int
    $before: String
    $after: String
  ) {
    ethereum {
      ...GetBalancesByWalletENSFragment
    }
  }
  ${GetBalancesByWalletENSFragment}
`;
