import { gql } from '@urql/core';
import { GetBalancesByWalletAddressFragment } from '../../../fragments/getBalancesByWalletAddress';

export const EthMainnetBalancesByWalletAddress = gql`
  query EthMainnetBalancesByWalletAddress(
    $address: String!
    $first: Int
    $before: String
    $after: String
  ) {
    ethereum {
      ...GetBalancesByWalletAddressFragment
    }
  }
  ${GetBalancesByWalletAddressFragment}
`;
