import {
  NftCollection_Erc721Contract_Fragment,
  PageInfo,
} from '../../../graphql/types';

export interface TrendingNFTCollection {
  trendingCollectionsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  trendingCollections: NftCollection_Erc721Contract_Fragment[];
}
