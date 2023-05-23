import { gql } from '@urql/core';
import { GetTransactionsByWalletAddressFragment } from '../../../fragments/getTransactionsByWalletAddress';

export const EthMainnetTransactionsByWalletAddress = gql`
  query EthMainnetTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
    $orderDirection: OrderDirection
  ) {
    ethereum {
      ...GetTransactionsByWalletAddressFragment
    }
  }
  ${GetTransactionsByWalletAddressFragment}
`;
