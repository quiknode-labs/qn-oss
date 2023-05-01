import { gql } from '@apollo/client/core';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthSepoliaWalletNFTsByAddress = gql`
  query EthSepoliaWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
