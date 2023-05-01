import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks
import { WalletByEnsFragment } from '../../fragments/nftsByWalletENS';

export const PolygonMainnetWalletNFTsByEns = gql`
  query PolygonMainnetWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
  ) {
    polygon {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
