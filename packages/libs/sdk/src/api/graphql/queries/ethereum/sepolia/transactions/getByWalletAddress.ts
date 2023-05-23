import { gql } from '@urql/core';
import { GetTransactionsByWalletAddressFragment } from '../../../fragments/getTransactionsByWalletAddress';

export const EthSepoliaTransactionsByWalletAddress = gql`
  query EthSepoliaTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
    $orderDirection: OrderDirection
  ) {
    ethereumSepolia {
      ...GetTransactionsByWalletAddressFragment
    }
  }
  ${GetTransactionsByWalletAddressFragment}
`;
