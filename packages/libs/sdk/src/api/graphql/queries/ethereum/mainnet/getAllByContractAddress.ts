import { gql } from '@apollo/client';
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
