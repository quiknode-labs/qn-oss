import { gql } from '@apollo/client/core';
import { WalletByEnsFragment } from '../../fragments/nftsByWalletENS';

export const EthMainnetWalletNFTsByEns = gql`
  query EthMainnetWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
  ) {
    ethereum {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
