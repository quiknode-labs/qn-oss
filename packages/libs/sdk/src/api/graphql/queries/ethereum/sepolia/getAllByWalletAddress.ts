import { gql } from '@apollo/client';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthSepoliaWalletNFTsByAddress = gql`
  query EthSepoliaWalletNFTsByAddress(
    $address: String!
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
