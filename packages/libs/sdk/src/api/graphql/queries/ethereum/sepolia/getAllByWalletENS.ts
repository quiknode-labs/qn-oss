import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks
import { WalletByEnsFragment } from '../../fragments/nftsByWalletENS';

export const EthSepoliaWalletNFTsByEns = gql`
  query EthSepoliaWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
