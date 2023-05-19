import { gql } from '@apollo/client/core';
import { GetBalancesByWalletENSFragment } from '../../../fragments/getBalancesByWalletENS';

export const EthMainnetBalancesByWalletENS = gql`
  query EthMainnetBalancesByWalletENS(
    $ensName: String!
    $first: Int
    $after: String
  ) {
    ethereum {
      ...GetBalancesByWalletENSFragment
    }
  }
  ${GetBalancesByWalletENSFragment}
`;
