import { NftCollectionFragment, PageInfo } from '../../../graphql/types';

export interface TrendingNFTCollection {
  trendingCollectionsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  trendingCollections: NftCollectionFragment & {
    tokensPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  };
}
