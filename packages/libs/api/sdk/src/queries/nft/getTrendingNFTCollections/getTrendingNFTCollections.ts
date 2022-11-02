import {
  NftCollectionFragment,
  NftFragment,
  PageInfo,
} from '../../../graphql/types';

export interface TrendingNFTCollection {
  trendingCollectionsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  trendingCollections: Omit<NftCollectionFragment, 'tokens'> & {
    tokens: NftFragment;
    tokensPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  };
}
