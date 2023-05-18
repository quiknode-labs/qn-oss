import { gql } from '@apollo/client';
import { WalletByEnsFragment } from '../../fragments/nftsByWalletENS';

export const EthMainnetWalletNFTsByEns = gql`
  query EthMainnetWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
