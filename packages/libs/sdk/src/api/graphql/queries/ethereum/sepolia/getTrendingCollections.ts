import { gql } from '@apollo/client/core/index.js';
import { NftTrendingCollections } from '../../fragments/nftTrendingCollections';

export const EthSepoliaTrendingCollections = gql`
  query EthSepoliaTrendingCollections($first: Int, $after: String) {
    ethereumSepolia {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
