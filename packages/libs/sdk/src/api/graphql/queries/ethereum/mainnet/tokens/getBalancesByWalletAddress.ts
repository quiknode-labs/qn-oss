import { gql } from '@apollo/client/core';
import { GetBalancesByWalletAddressFragment } from '../../../fragments/getBalancesByWalletAddress';

export const EthMainnetBalancesByWalletAddress = gql`
  query EthMainnetBalancesByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    ethereum {
      ...GetBalancesByWalletAddressFragment
    }
  }
  ${GetBalancesByWalletAddressFragment}
`;
