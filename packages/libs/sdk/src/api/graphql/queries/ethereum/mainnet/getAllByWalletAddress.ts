import { gql } from '@apollo/client';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthMainnetWalletNFTsByAddress = gql`
  query EthMainnetWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
