import { gql } from '@urql/core';
import { NftTrendingCollections } from '../../../fragments/nftTrendingCollections';

export const EthSepoliaTrendingCollections = gql`
  query EthSepoliaTrendingCollections(
    $first: Int
    $before: String
    $after: String
  ) {
    ethereumSepolia {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
