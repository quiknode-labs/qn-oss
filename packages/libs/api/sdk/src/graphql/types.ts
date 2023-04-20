import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
};

export type Collection = {
  address: Scalars['String'];
  attributes?: Maybe<CollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<NftContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  ohlcvChart?: Maybe<Array<CollectionOhlcvChart>>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  orderHistory?: Maybe<Array<CollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CollectionWalletsConnection;
};


export type CollectionAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CollectionHoldersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CollectionOhlcvChartArgs = {
  filter?: InputMaybe<CollectionOhlcvChartInput>;
};


export type CollectionOrderHistoryArgs = {
  filter?: InputMaybe<CollectionOrderHistoryInput>;
};


export type CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CollectionWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A contract's attribute count */
export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  /** The trait key. */
  name: Scalars['String'];
  /** The value of the trait. */
  value?: Maybe<Scalars['String']>;
};

export type CollectionAttributesConnection = {
  __typename?: 'CollectionAttributesConnection';
  edges: Array<CollectionAttributesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionAttributesConnectionEdge = {
  __typename?: 'CollectionAttributesConnectionEdge';
  cursor: Scalars['String'];
  node: CollectionAttribute;
};

export type CollectionHoldersConnection = {
  __typename?: 'CollectionHoldersConnection';
  edges: Array<CollectionHoldersConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionHoldersConnectionEdge = {
  __typename?: 'CollectionHoldersConnectionEdge';
  cursor: Scalars['String'];
  node: NftWallet;
};

/** Collection OHLCV chart stats */
export type CollectionOhlcvChart = {
  __typename?: 'CollectionOHLCVChart';
  average?: Maybe<Scalars['Float']>;
  close?: Maybe<Scalars['Float']>;
  count: Scalars['Float'];
  high?: Maybe<Scalars['Float']>;
  low?: Maybe<Scalars['Float']>;
  open?: Maybe<Scalars['Float']>;
  timestamp: Scalars['DateTime'];
  volume?: Maybe<Scalars['Float']>;
};

/** Filter by input interval */
export enum CollectionOhlcvChartInterval {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneDay = 'ONE_DAY',
  OneHour = 'ONE_HOUR',
  OneMinute = 'ONE_MINUTE',
  SevenDays = 'SEVEN_DAYS',
  SixHours = 'SIX_HOURS',
  ThirtyDays = 'THIRTY_DAYS',
  ThirtyMinutes = 'THIRTY_MINUTES',
  TwelveHours = 'TWELVE_HOURS'
}

export type CollectionOhlcvChartInput = {
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  interval?: InputMaybe<CollectionOhlcvChartInterval>;
  limit?: InputMaybe<Scalars['Float']>;
};

/** Collection order history summary */
export type CollectionOrderHistory = {
  __typename?: 'CollectionOrderHistory';
  fromAddress: Scalars['String'];
  priceInEth: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
  transactionHash: Scalars['String'];
};

export type CollectionOrderHistoryInput = {
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  isLimited?: InputMaybe<Scalars['Boolean']>;
};

/** Sale of a collection token */
export type CollectionSale = {
  __typename?: 'CollectionSale';
  estimatedConfirmedAt?: Maybe<Scalars['DateTime']>;
  priceInEth?: Maybe<Scalars['Float']>;
};

export enum CollectionStandard {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type CollectionStandardInput = {
  eq?: InputMaybe<CollectionStandard>;
  in?: InputMaybe<Array<CollectionStandard>>;
  notIn?: InputMaybe<Array<CollectionStandard>>;
};

/** Stats of a collection */
export type CollectionStats = {
  __typename?: 'CollectionStats';
  average?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Float']>;
};

export type CollectionTokenEventsConnection = {
  __typename?: 'CollectionTokenEventsConnection';
  edges: Array<CollectionTokenEventsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionTokenEventsConnectionEdge = {
  __typename?: 'CollectionTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type CollectionWalletsConnection = {
  __typename?: 'CollectionWalletsConnection';
  edges: Array<CollectionWalletsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionWalletsConnectionEdge = {
  __typename?: 'CollectionWalletsConnectionEdge';
  cursor: Scalars['String'];
  node: Wallet;
};

/** Filter input for collections */
export type CollectionsFilterInput = {
  address?: InputMaybe<StringInput>;
  ercStandard?: InputMaybe<CollectionStandardInput>;
};

export type Contract = {
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: ContractTokenEventsConnection;
};


export type ContractTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ContractTokenEventsConnection = {
  __typename?: 'ContractTokenEventsConnection';
  edges: Array<ContractTokenEventsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContractTokenEventsConnectionEdge = {
  __typename?: 'ContractTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type ContractsConnection = {
  __typename?: 'ContractsConnection';
  edges: Array<ContractsEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContractsEdge = {
  __typename?: 'ContractsEdge';
  cursor: Scalars['String'];
  node: Contract;
};

/** Filter input for contracts */
export type ContractsFilterInput = {
  address?: InputMaybe<StringInput>;
};

export type DateTimeInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
};

export type Erc721Collection = Collection & {
  __typename?: 'ERC721Collection';
  address: Scalars['String'];
  attributes?: Maybe<CollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<NftContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<Erc721Nft>;
  nfts: Erc721CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CollectionOhlcvChart>>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  orderHistory?: Maybe<Array<CollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CollectionStats>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CollectionWalletsConnection;
};


export type Erc721CollectionAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721CollectionHoldersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721CollectionNftArgs = {
  tokenId: Scalars['String'];
};


export type Erc721CollectionNftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<NfTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721CollectionOhlcvChartArgs = {
  filter?: InputMaybe<CollectionOhlcvChartInput>;
};


export type Erc721CollectionOrderHistoryArgs = {
  filter?: InputMaybe<CollectionOrderHistoryInput>;
};


export type Erc721CollectionStatsArgs = {
  filter?: InputMaybe<Erc721CollectionStatsInput>;
};


export type Erc721CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721CollectionWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc721CollectionStatsInput = {
  timeRange?: InputMaybe<DateTimeInput>;
};

export type Erc721CollectionTokensConnection = {
  __typename?: 'ERC721CollectionTokensConnection';
  edges: Array<Erc721CollectionTokensEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc721CollectionTokensEdge = {
  __typename?: 'ERC721CollectionTokensEdge';
  cursor: Scalars['String'];
  node: Erc721Nft;
};

export type Erc721Nft = Nft & {
  __typename?: 'ERC721NFT';
  animationUrl?: Maybe<Scalars['String']>;
  /** The attributes of the token. */
  attributes?: Maybe<Array<TokenAttribute>>;
  collection?: Maybe<Erc721Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<NftContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use nft.wallet instead */
  holder?: Maybe<NftWallet>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: NftTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<TokenUpload>>;
  wallet?: Maybe<Wallet>;
};


export type Erc721NftTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155Collection = Collection & {
  __typename?: 'ERC1155Collection';
  address: Scalars['String'];
  attributes?: Maybe<CollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<NftContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<Erc1155Nft>;
  nfts: Erc1155CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CollectionOhlcvChart>>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  orderHistory?: Maybe<Array<CollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CollectionWalletsConnection;
};


export type Erc1155CollectionAttributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155CollectionHoldersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155CollectionNftArgs = {
  tokenId: Scalars['String'];
};


export type Erc1155CollectionNftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<NfTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155CollectionOhlcvChartArgs = {
  filter?: InputMaybe<CollectionOhlcvChartInput>;
};


export type Erc1155CollectionOrderHistoryArgs = {
  filter?: InputMaybe<CollectionOrderHistoryInput>;
};


export type Erc1155CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155CollectionWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155CollectionTokensConnection = {
  __typename?: 'ERC1155CollectionTokensConnection';
  edges: Array<Erc1155CollectionTokensEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155CollectionTokensEdge = {
  __typename?: 'ERC1155CollectionTokensEdge';
  cursor: Scalars['String'];
  node: Erc1155Nft;
};

export type Erc1155Nft = Nft & {
  __typename?: 'ERC1155NFT';
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<Erc1155Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<NftContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use nft.wallets instead */
  holders: Erc1155NftHoldersConnection;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: NftTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<TokenUpload>>;
  wallets: Erc1155NftWalletsConnection;
};


export type Erc1155NftHoldersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155NftTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155NftWalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155NftHoldersConnection = {
  __typename?: 'ERC1155NFTHoldersConnection';
  edges: Array<Erc1155NftHoldersConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155NftHoldersConnectionEdge = {
  __typename?: 'ERC1155NFTHoldersConnectionEdge';
  cursor: Scalars['String'];
  node: NftWallet;
};

export type Erc1155NftWalletsConnection = {
  __typename?: 'ERC1155NFTWalletsConnection';
  edges: Array<Erc1155NftWalletsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155NftWalletsConnectionEdge = {
  __typename?: 'ERC1155NFTWalletsConnectionEdge';
  cursor: Scalars['String'];
  node: Wallet;
};

export enum ErcStandard {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type EvmSchemaType = {
  __typename?: 'EVMSchemaType';
  collection?: Maybe<Collection>;
  collections: EvmSchemaTypeCollectionsConnection;
  contract?: Maybe<Contract>;
  contracts: ContractsConnection;
  nft?: Maybe<Nft>;
  tokenEvents: EvmSchemaTypeTokenEventsConnection;
  transaction?: Maybe<Transaction>;
  /** Returns a list of transactions. Ordered by block number and index. */
  transactions?: Maybe<EvmSchemaTypeTransactionsConnection>;
  trendingCollections: EvmSchemaTypeTrendingCollectionsConnection;
  walletByAddress?: Maybe<Wallet>;
  walletByENS?: Maybe<Wallet>;
};


export type EvmSchemaTypeCollectionArgs = {
  contractAddress: Scalars['String'];
};


export type EvmSchemaTypeCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EvmSchemaTypeContractArgs = {
  contractAddress: Scalars['String'];
};


export type EvmSchemaTypeContractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ContractsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EvmSchemaTypeNftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type EvmSchemaTypeTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EvmSchemaTypeTransactionArgs = {
  hash: Scalars['String'];
};


export type EvmSchemaTypeTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type EvmSchemaTypeTrendingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TrendingCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrendingOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type EvmSchemaTypeWalletByAddressArgs = {
  address: Scalars['String'];
};


export type EvmSchemaTypeWalletByEnsArgs = {
  ensName: Scalars['String'];
};

export type EvmSchemaTypeCollectionsConnection = {
  __typename?: 'EVMSchemaTypeCollectionsConnection';
  edges: Array<EvmSchemaTypeCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvmSchemaTypeCollectionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: Collection;
};

export type EvmSchemaTypeTokenEventsConnection = {
  __typename?: 'EVMSchemaTypeTokenEventsConnection';
  edges: Array<EvmSchemaTypeTokenEventsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvmSchemaTypeTokenEventsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type EvmSchemaTypeTransactionsConnection = {
  __typename?: 'EVMSchemaTypeTransactionsConnection';
  edges: Array<EvmSchemaTypeTransactionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvmSchemaTypeTransactionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTransactionsConnectionEdge';
  cursor: Scalars['String'];
  node: Transaction;
};

export type EvmSchemaTypeTrendingCollectionsConnection = {
  __typename?: 'EVMSchemaTypeTrendingCollectionsConnection';
  edges: Array<EvmSchemaTypeTrendingCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvmSchemaTypeTrendingCollectionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTrendingCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: TrendingCollection;
};

export type IntegerInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
};

export type Nft = {
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<NftContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: NftTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<TokenUpload>>;
};


export type NftTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type NftContract = Contract & {
  __typename?: 'NFTContract';
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  collection?: Maybe<Collection>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: ContractTokenEventsConnection;
};


export type NftContractTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type NftTokenEventsConnection = {
  __typename?: 'NFTTokenEventsConnection';
  edges: Array<NftTokenEventsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NftTokenEventsConnectionEdge = {
  __typename?: 'NFTTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type NftWallet = {
  __typename?: 'NFTWallet';
  owner?: Maybe<Wallet>;
  walletAddress?: Maybe<Scalars['String']>;
};

export type NfTsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Metadata provided by opensea */
export type OpenSeaMetadata = {
  __typename?: 'OpenSeaMetadata';
  /** Collection is hidden on Opensea. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Collection verified by Opensea. */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** Slug provided by Opensea (it might be stale). */
  unsafeSlug?: Maybe<Scalars['String']>;
};

/** Sort ascending (A-Z) or descending (Z-A) */
export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ethereum: EvmSchemaType;
  ethereumSepolia: EvmSchemaType;
  polygon: EvmSchemaType;
};

export type StringInput = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A token attribute */
export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type TokenBurnEvent = TokenEvent & {
  __typename?: 'TokenBurnEvent';
  blockNumber: Scalars['Int'];
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<ErcStandard>;
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

export type TokenContract = Contract & {
  __typename?: 'TokenContract';
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  decimals?: Maybe<Scalars['BigInt']>;
  details?: Maybe<TokenDetailsType>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: ContractTokenEventsConnection;
};


export type TokenContractTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TokenDetailsType = {
  __typename?: 'TokenDetailsType';
  address: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type TokenEvent = {
  blockNumber: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

/** Filter input for token events */
export type TokenEventsFilterInput = {
  /** Filter token events by their block number */
  blockNumber?: InputMaybe<IntegerInput>;
  /** Filter token events by contract address */
  contractAddress?: InputMaybe<StringInput>;
  /** Filter token events by the "from" wallet */
  fromAddress?: InputMaybe<StringInput>;
  /** Filter token events by their estimated confirmation date */
  timestamp?: InputMaybe<DateTimeInput>;
  /** Filter token events by the "to" wallet */
  toAddress?: InputMaybe<StringInput>;
  /** Filter token events by their type */
  type?: InputMaybe<TokenTransferType>;
  /** Filter token events by their type */
  typeIn?: InputMaybe<Array<TokenTransferType>>;
  /** Filter token events by the "to" and "from" wallet */
  walletAddress?: InputMaybe<StringInput>;
};

export type TokenMintEvent = TokenEvent & {
  __typename?: 'TokenMintEvent';
  blockNumber: Scalars['Int'];
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<ErcStandard>;
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

export type TokenSaleEvent = TokenEvent & {
  __typename?: 'TokenSaleEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentTokenContractAddress: Scalars['String'];
  sentTokenContractERCStandard?: Maybe<ErcStandard>;
  sentTokenId?: Maybe<Scalars['BigInt']>;
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

export type TokenSwapEvent = TokenEvent & {
  __typename?: 'TokenSwapEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentTokenContractAddress: Scalars['String'];
  sentTokenContractERCStandard?: Maybe<ErcStandard>;
  sentTokenId?: Maybe<Scalars['BigInt']>;
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

export type TokenTransferEvent = TokenEvent & {
  __typename?: 'TokenTransferEvent';
  blockNumber: Scalars['Int'];
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<ErcStandard>;
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenTransferType;
};

export enum TokenTransferType {
  Burn = 'BURN',
  Mint = 'MINT',
  Sale = 'SALE',
  Swap = 'SWAP',
  Transfer = 'TRANSFER'
}

/** Token media uploads. */
export type TokenUpload = {
  __typename?: 'TokenUpload';
  /** The upload height. */
  height?: Maybe<Scalars['Float']>;
  /** The upload mimeType. */
  mimeType?: Maybe<Scalars['String']>;
  /** The upload url. */
  url: Scalars['String'];
  /** The upload width. */
  width?: Maybe<Scalars['Float']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['DateTime'];
  contractAddress?: Maybe<Scalars['String']>;
  cumulativeGasUsed: Scalars['BigInt'];
  effectiveGasPrice?: Maybe<Scalars['BigInt']>;
  fromAddress: Scalars['String'];
  /** The amount of gas supplied for this transaction to happen */
  gas?: Maybe<Scalars['BigInt']>;
  /** Cost in Gwei per unit of gas for this transaction */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /** The amount of gas used by this transaction */
  gasUsed: Scalars['BigInt'];
  hash: Scalars['String'];
  input?: Maybe<Scalars['String']>;
  /** Max gas fee in Gwei */
  maxFeePerGas?: Maybe<Scalars['BigInt']>;
  /** Max gas priority fee in Gwei */
  maxPriorityFeePerGas?: Maybe<Scalars['BigInt']>;
  toAddress?: Maybe<Scalars['String']>;
  transactionIndex: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
};

/** Filter input for transactions */
export type TransactionsFilterInput = {
  blockNumber?: InputMaybe<IntegerInput>;
  fromAddress?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<DateTimeInput>;
  toAddress?: InputMaybe<Scalars['String']>;
};

export type TrendingCollection = {
  __typename?: 'TrendingCollection';
  collection?: Maybe<Collection>;
  last20Sales?: Maybe<Array<CollectionSale>>;
  stats?: Maybe<TrendingCollectionStats>;
};

/** Stats of a trending collection */
export type TrendingCollectionStats = {
  __typename?: 'TrendingCollectionStats';
  average?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Filter input for trending collections */
export type TrendingCollectionsFilterInput = {
  /** A time period relative to the current time in which to filter trending collections by. */
  timePeriod?: InputMaybe<TrendingPeriod>;
  /** Custom time range in which to filter trending collections by. Available only to paid customers. */
  timeRange?: InputMaybe<DateTimeInput>;
};

export enum TrendingOrderBy {
  Average = 'AVERAGE',
  Sales = 'SALES',
  Volume = 'VOLUME'
}

export enum TrendingPeriod {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneDay = 'ONE_DAY',
  OneHour = 'ONE_HOUR',
  OneMinute = 'ONE_MINUTE',
  SevenDays = 'SEVEN_DAYS',
  ThirtyMinutes = 'THIRTY_MINUTES',
  TwelveHours = 'TWELVE_HOURS'
}

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  ensName?: Maybe<Scalars['String']>;
  /** @deprecated Use wallet.collection instead. */
  heldCollection?: Maybe<WalletCollection>;
  /** @deprecated Use wallet.collections instead. */
  heldCollections: WalletHeldCollectionsConnection;
  /** @deprecated Use wallet.nft instead. */
  heldNft?: Maybe<WalletNft>;
  /** @deprecated Use wallet.nfts instead. */
  heldNfts: WalletHeldNfTsConnection;
  /** @deprecated Use wallet.tokenBalances instead. */
  heldTokenBalances: WalletHeldTokenBalancesConnection;
  tokenBalances: WalletTokenBalancesConnection;
  tokenEvents: WalletTokenEventsConnection;
  /** Returns a list of transactions this wallet is associated with. Ordered by block number and index. */
  transactions: WalletTransactionsConnection;
  walletCollection?: Maybe<WalletCollection>;
  walletCollections: WalletWalletCollectionsConnection;
  walletNFT?: Maybe<WalletNft>;
  walletNFTs: WalletNfTsConnection;
};


export type WalletHeldCollectionArgs = {
  collectionAddress: Scalars['String'];
};


export type WalletHeldCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WalletCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletCollectionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletHeldNftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type WalletHeldNftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WalletNfTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletNfTsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletHeldTokenBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletTokenBalanceOrder>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletTokenBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletTokenBalanceOrder>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletWalletCollectionArgs = {
  collectionAddress: Scalars['String'];
};


export type WalletWalletCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WalletCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletCollectionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
};


export type WalletWalletNftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type WalletWalletNfTsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WalletNfTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WalletNfTsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
};

export type WalletCollection = {
  __typename?: 'WalletCollection';
  collection?: Maybe<Collection>;
  collectionAddress?: Maybe<Scalars['String']>;
  /** @deprecated Use nftsCount instead. */
  heldTokensCount: Scalars['BigInt'];
  nftsCount: Scalars['BigInt'];
};

export enum WalletCollectionOrderBy {
  DateAcquired = 'DATE_ACQUIRED',
  Name = 'NAME'
}

/** Filter of collections in a wallet */
export type WalletCollectionsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export type WalletHeldCollectionsConnection = {
  __typename?: 'WalletHeldCollectionsConnection';
  edges: Array<WalletHeldCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletHeldCollectionsConnectionEdge = {
  __typename?: 'WalletHeldCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: WalletCollection;
};

export type WalletHeldNfTsConnection = {
  __typename?: 'WalletHeldNFTsConnection';
  edges: Array<WalletHeldNfTsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletHeldNfTsConnectionEdge = {
  __typename?: 'WalletHeldNFTsConnectionEdge';
  cursor: Scalars['String'];
  node: WalletNft;
};

export type WalletHeldTokenBalancesConnection = {
  __typename?: 'WalletHeldTokenBalancesConnection';
  edges: Array<WalletHeldTokenBalancesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletHeldTokenBalancesConnectionEdge = {
  __typename?: 'WalletHeldTokenBalancesConnectionEdge';
  cursor: Scalars['String'];
  node: WalletTokenBalance;
};

export type WalletNft = {
  __typename?: 'WalletNFT';
  /** @deprecated Use nftsCount instead. */
  heldNftCount?: Maybe<Scalars['Int']>;
  nft?: Maybe<Nft>;
  nftsCount?: Maybe<Scalars['Int']>;
};

export type WalletNfTsConnection = {
  __typename?: 'WalletNFTsConnection';
  edges: Array<WalletNfTsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletNfTsConnectionEdge = {
  __typename?: 'WalletNFTsConnectionEdge';
  cursor: Scalars['String'];
  node: WalletNft;
};

/** Filter of nfts in a wallet */
export type WalletNfTsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum WalletNfTsOrderBy {
  DateAcquired = 'DATE_ACQUIRED',
  Name = 'NAME'
}

export type WalletTokenBalance = {
  __typename?: 'WalletTokenBalance';
  contract?: Maybe<TokenContract>;
  contractAddress: Scalars['String'];
  totalBalance: Scalars['BigInt'];
};

/** Sort wallet token balance */
export enum WalletTokenBalanceOrder {
  ContractAddress = 'CONTRACT_ADDRESS',
  Name = 'NAME',
  Symbol = 'SYMBOL',
  TotalBalance = 'TOTAL_BALANCE'
}

export type WalletTokenBalancesConnection = {
  __typename?: 'WalletTokenBalancesConnection';
  edges: Array<WalletTokenBalancesConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTokenBalancesConnectionEdge = {
  __typename?: 'WalletTokenBalancesConnectionEdge';
  cursor: Scalars['String'];
  node: WalletTokenBalance;
};

export type WalletTokenEventsConnection = {
  __typename?: 'WalletTokenEventsConnection';
  edges: Array<WalletTokenEventsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTokenEventsConnectionEdge = {
  __typename?: 'WalletTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type WalletTransactionsConnection = {
  __typename?: 'WalletTransactionsConnection';
  edges: Array<WalletTransactionsEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTransactionsEdge = {
  __typename?: 'WalletTransactionsEdge';
  cursor: Scalars['String'];
  node: Transaction;
};

export type WalletWalletCollectionsConnection = {
  __typename?: 'WalletWalletCollectionsConnection';
  edges: Array<WalletWalletCollectionsConnectionEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletWalletCollectionsConnectionEdge = {
  __typename?: 'WalletWalletCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: WalletCollection;
};

export type EthMainnetWalletNfTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type EthMainnetWalletNfTsByEnsQuery = { __typename?: 'Query', ethereum: (
    { __typename?: 'EVMSchemaType' }
    & WalletByEnsFragmentFragment
  ) };

export type NftFragment = { __typename?: 'WalletNFT', nft?: { __typename?: 'ERC721NFT', animationUrl?: string | null, description?: string | null, externalUrl?: string | null, name?: string | null, tokenId: any, collection?: { __typename?: 'ERC721Collection', address: string } | null } | { __typename?: 'ERC1155NFT', animationUrl?: string | null, description?: string | null, externalUrl?: string | null, name?: string | null, tokenId: any, collection?: { __typename?: 'ERC1155Collection', address: string } | null } | null };

export type WalletByEnsFragmentFragment = { __typename?: 'EVMSchemaType', walletByENS?: { __typename?: 'Wallet', address: string, ensName?: string | null, walletNFTs: { __typename?: 'WalletNFTsConnection', pageInfo: (
        { __typename?: 'PageInfo' }
        & PaginationFragment
      ), edges: Array<{ __typename?: 'WalletNFTsConnectionEdge', node: (
          { __typename?: 'WalletNFT' }
          & NftFragment
        ) }> } } | null };

export type PaginationFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type PolygonMainnetWalletNfTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type PolygonMainnetWalletNfTsByEnsQuery = { __typename?: 'Query', polygon: (
    { __typename?: 'EVMSchemaType' }
    & WalletByEnsFragmentFragment
  ) };

export const Pagination = gql`
    fragment Pagination on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const Nft = gql`
    fragment Nft on WalletNFT {
  nft {
    animationUrl
    description
    externalUrl
    name
    tokenId
    collection {
      address
    }
  }
}
    `;
export const WalletByEnsFragment = gql`
    fragment WalletByEnsFragment on EVMSchemaType {
  walletByENS(ensName: $ensName) {
    address
    ensName
    walletNFTs(after: $after, first: $first) {
      pageInfo {
        ...Pagination
      }
      edges {
        node {
          ...Nft
        }
      }
    }
  }
}
    ${Pagination}
${Nft}`;
export const EthMainnetWalletNfTsByEns = gql`
    query EthMainnetWalletNFTsByEns($ensName: String!, $after: String, $first: Int) {
  ethereum {
    ...WalletByEnsFragment
  }
}
    ${WalletByEnsFragment}`;
export const PolygonMainnetWalletNfTsByEns = gql`
    query PolygonMainnetWalletNFTsByEns($ensName: String!, $after: String, $first: Int) {
  polygon {
    ...WalletByEnsFragment
  }
}
    ${WalletByEnsFragment}`;