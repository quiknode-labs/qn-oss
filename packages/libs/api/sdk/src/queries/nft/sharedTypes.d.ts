/**
 * @todo replace this with graphql automatic schema generation
 */

/*** Wallet ***/

export interface Wallet {
  ensName: string;
  address: string;
  tokens: Connection<NFT>;
}

/*** Contracts ***/

export interface ContractWithTokens extends ContractBase {
  tokenSupply: number;
  tokens: Connection<NFTWithBasicImages>;
}

export interface ContractDetails extends ContractBase {
  circulatingBase: number;
  stats: ContractStats;
  attributes: ContractAttribute[];
}

interface ContractAttribute {
  name: string;
  rarity: number;
  value: string;
  valueCount: number;
}

interface ContractStats {
  average: number;
  ceiling: number;
  floor: number;
  totalSales: number;
  volume: number;
}

export interface ContractBase {
  address: string;
  isVerified: boolean;
  tokenStandard: string;
  name: string;
  symbol: string;
}

/*** NFT/Tokens ***/

interface NFTDetails extends NFTBase {
  tokenId: string;
  attributes?: NFTAttribute[];
  images?: NFTImageFull[];
  contract: ContractBase;
  name: string;
  symbol: string;
  metadata?: NFTMetadata;
}

export interface NFT extends NFTWithBasicImages {
  contract: {
    address: string;
    symbol: string;
    name: string;
  };
}

export interface NFTWithBasicImages extends NFTBase {
  images: NFTImageBase[];
}

export interface NFTBase {
  tokenId: string;
}

interface NFTAttribute {
  name: string;
  value: string;
}

interface NFTImageFull extends NFTImageBase {
  height: number;
  width: number;
  mimeType: string;
  url: string;
}

interface NFTImageBase {
  url: string;
}

interface NFTMetadata {
  animation_url: string;
  background_color: string;
  description: string;
  external_url: string;
  image: string;
  image_data: string;
  name: string;
  youtube_url: string;
}

/*** Logs ***/
interface ContracEventLogs {
  contract: {
    address: string;
  };
  logs: ContracEventLogs | (ContracEventLogs & OrderEvents);
}

interface ContractEventLog extends BaseEventLog {
  token: {
    tokenId: string;
  };
}

interface TokenEventLogs {
  contract: {
    address: string;
  };
  token: {
    tokenId: string;
    logs: BaseEventLog | (BaseEventLog & OrderEvents);
  };
}

interface OrderEvents {
  marketplace: string;
  priceInEth: number;
}

interface BaseEventLog {
  blockNumber: number;
  type: string;
  fromAddress: string;
  toAddress: string;
  estimatedConfirmedAt: string;
  transactionHash: string;
}

/*** Pagination ***/

export interface PaginationDetails {
  endCursor: string;
  hasNextPage: string;
}

export interface TokenPaginationInfo {
  tokensPageInfo: PaginationDetails;
}

export interface LogPaginationInfo {
  logsPageInfo: PaginationDetails;
}

/*** Query Responses ***/

export interface WalletNFTsQueryResponse {
  wallet: (Wallet & TokenPaginationInfo) | null;
}

export interface ContractNFTsQueryResponse {
  contract: (ContractWithTokens & TokenPaginationInfo) | null;
}

export interface CollectionDetailsQueryResponse {
  contract: ContractDetails | null;
}

export interface EventLogsQueryResponse {
  Token: (TokenEventLogs & LogPaginationInfo) | null;
}

export interface NFTDetailsQueryResponse {
  token: NFTDetails | null;
}

export interface ContractEventLogsQueryResponse {
  contract: (ContractEventLogs & LogPaginationInfo) | null;
}

export interface TrendingNFTCollection {
  trendingCollectionsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  trendingCollections: Omit<NftCollectionFragment, 'tokens'> & {
    tokens: NftFragment;
    tokensPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
  };
}
