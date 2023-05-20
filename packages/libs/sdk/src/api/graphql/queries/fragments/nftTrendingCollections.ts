import { gql } from '@urql/core';

import { TrendingCollectionInfo } from './TrendingCollection';
import { Pagination } from './pagination';

export const NftTrendingCollections = gql`
  fragment NftTrendingCollections on EVMSchemaType {
    trendingCollections(first: $first, after: $after) {
      pageInfo {
        ...Pagination
      }
      edges {
        node {
          collection {
            ...TrendingCollectionInfo
          }
        }
      }
    }
  }
  ${Pagination}
  ${TrendingCollectionInfo}
`;
