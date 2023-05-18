import { gql } from '@apollo/client/core/index.js';
import { NftTrendingCollections } from '../../fragments/nftTrendingCollections';

export const PolygonMainnetTrendingCollections = gql`
  query PolygonMainnetTrendingCollections($first: Int, $after: String) {
    polygon {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
