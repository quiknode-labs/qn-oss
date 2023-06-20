import { gql } from '@urql/core';
import { WalletByAddressFragment } from '../../../fragments/nftsByWalletAddress';

export const EthSepoliaWalletNFTsByAddress = gql`
  query EthSepoliaWalletNFTsByAddress(
    $address: String!
    $before: String
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereumSepolia {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
