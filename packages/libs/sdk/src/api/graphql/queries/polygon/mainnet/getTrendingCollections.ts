import { gql } from '@urql/core';
import { NftTrendingCollections } from '../../fragments/nftTrendingCollections';

export const PolygonMainnetTrendingCollections = gql`
  query PolygonMainnetTrendingCollections($first: Int, $after: String) {
    polygon {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
