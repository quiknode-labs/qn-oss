import { gql } from '@apollo/client';
import { WalletByAddressFragment } from '../../fragments/nftsByWalletAddress';

export const EthMainnetWalletNFTsByAddress = gql`
  query EthMainnetWalletNFTsByAddress(
    $ensName: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...WalletByAddressFragment
    }
  }
  ${WalletByAddressFragment}
`;
