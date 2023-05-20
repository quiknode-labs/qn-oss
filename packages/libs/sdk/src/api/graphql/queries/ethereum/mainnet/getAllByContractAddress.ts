import { gql } from '@urql/core';
import { NftsByContractAddressFragment } from '../../fragments/nftsByContractAddress';

export const EthMainnetWalletNFTsByContractAddress = gql`
  query EthMainnetWalletNFTsByContractAddress(
    $contractAddress: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...NftsByContractAddressFragment
    }
  }
  ${NftsByContractAddressFragment}
`;
