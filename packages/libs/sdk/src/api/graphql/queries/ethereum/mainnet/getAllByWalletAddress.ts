import { gql } from '@apollo/client/core/index.js';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthMainnetWalletNFTsByAddress = gql`
  query EthMainnetWalletNFTsByAddress(
    $address: String!
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
