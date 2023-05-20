import { gql } from '@urql/core';
import { WalletByEnsFragment } from '../../../fragments/nftsByWalletENS';

export const PolygonMainnetWalletNFTsByEns = gql`
  query PolygonMainnetWalletNFTsByEns(
    $ensName: String!
    $after: String
    $first: Int
    $filter: WalletNFTsFilterInput
  ) {
    polygon {
      ...WalletByEnsFragment
    }
  }
  ${WalletByEnsFragment}
`;
