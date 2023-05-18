import { gql } from '@apollo/client/core/index.js';
import { NftTrendingCollections } from '../../fragments/nftTrendingCollections';

export const EthMainnetTrendingCollections = gql`
  query EthMainnetTrendingCollections($first: Int, $after: String) {
    ethereum {
      ...NftTrendingCollections
    }
  }
  ${NftTrendingCollections}
`;
