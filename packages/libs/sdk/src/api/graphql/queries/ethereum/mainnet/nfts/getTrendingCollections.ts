import { gql } from '@urql/core';
import { NftTrendingCollections } from '../../../fragments/nftTrendingCollections';

export const EthMainnetTrendingCollections = gql`
  query EthMainnetTrendingCollections(
    $first: Int
    $before: String
    $after: String
  ) {
    ethereum {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
