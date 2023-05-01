import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks;
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
