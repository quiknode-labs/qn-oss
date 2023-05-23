import { gql } from '@urql/core';
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
