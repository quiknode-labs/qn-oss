import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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

export type CodegenCollection = {
  address: Scalars['String'];
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CodegenCollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  name?: Maybe<Scalars['String']>;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};

export type CodegenCollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenCollectionCodegenholdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenCollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};

export type CodegenCollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};

export type CodegenCollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenCollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A contract's attribute count */
export type CodegenCollectionAttribute = {
  __typename?: 'CollectionAttribute';
  /** The trait key. */
  name: Scalars['String'];
  /** The value of the trait. */
  value?: Maybe<Scalars['String']>;
};

export type CodegenCollectionAttributesConnection = {
  __typename?: 'CollectionAttributesConnection';
  edges: Array<CodegenCollectionAttributesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionAttributesConnectionEdge = {
  __typename?: 'CollectionAttributesConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenCollectionAttribute;
};

export type CodegenCollectionHoldersConnection = {
  __typename?: 'CollectionHoldersConnection';
  edges: Array<CodegenCollectionHoldersConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionHoldersConnectionEdge = {
  __typename?: 'CollectionHoldersConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenNFTWallet;
};

/** Collection OHLCV chart stats */
export type CodegenCollectionOHLCVChart = {
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
export enum CodegenCollectionOHLCVChartInterval {
  CodegenFIFTEEN_MINUTES = 'FIFTEEN_MINUTES',
  CodegenFIVE_MINUTES = 'FIVE_MINUTES',
  CodegenONE_DAY = 'ONE_DAY',
  CodegenONE_HOUR = 'ONE_HOUR',
  CodegenONE_MINUTE = 'ONE_MINUTE',
  CodegenSEVEN_DAYS = 'SEVEN_DAYS',
  CodegenSIX_HOURS = 'SIX_HOURS',
  CodegenTHIRTY_DAYS = 'THIRTY_DAYS',
  CodegenTHIRTY_MINUTES = 'THIRTY_MINUTES',
  CodegenTWELVE_HOURS = 'TWELVE_HOURS',
}

export type CodegenCollectionOhlcvChartInput = {
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  interval?: InputMaybe<CodegenCollectionOHLCVChartInterval>;
  limit?: InputMaybe<Scalars['Float']>;
};

/** Collection order history summary */
export type CodegenCollectionOrderHistory = {
  __typename?: 'CollectionOrderHistory';
  fromAddress: Scalars['String'];
  priceInEth: Scalars['Float'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
  transactionHash: Scalars['String'];
};

export type CodegenCollectionOrderHistoryInput = {
  confirmedAtGte?: InputMaybe<Scalars['DateTime']>;
  confirmedAtLte?: InputMaybe<Scalars['DateTime']>;
  isLimited?: InputMaybe<Scalars['Boolean']>;
};

/** Sale of a collection token */
export type CodegenCollectionSale = {
  __typename?: 'CollectionSale';
  estimatedConfirmedAt?: Maybe<Scalars['DateTime']>;
  priceInEth?: Maybe<Scalars['Float']>;
};

export enum CodegenCollectionStandard {
  CodegenERC721 = 'ERC721',
  CodegenERC1155 = 'ERC1155',
}

export type CodegenCollectionStandardInput = {
  eq?: InputMaybe<CodegenCollectionStandard>;
  in?: InputMaybe<Array<CodegenCollectionStandard>>;
  notIn?: InputMaybe<Array<CodegenCollectionStandard>>;
};

/** Stats of a collection */
export type CodegenCollectionStats = {
  __typename?: 'CollectionStats';
  average?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Float']>;
};

export type CodegenCollectionTokenEventsConnection = {
  __typename?: 'CollectionTokenEventsConnection';
  edges: Array<CodegenCollectionTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionTokenEventsConnectionEdge = {
  __typename?: 'CollectionTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenCollectionWalletsConnection = {
  __typename?: 'CollectionWalletsConnection';
  edges: Array<CodegenCollectionWalletsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenCollectionWalletsConnectionEdge = {
  __typename?: 'CollectionWalletsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWallet;
};

/** Filter input for collections */
export type CodegenCollectionsFilterInput = {
  address?: InputMaybe<CodegenStringInput>;
  ercStandard?: InputMaybe<CodegenCollectionStandardInput>;
};

export type CodegenContract = {
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};

export type CodegenContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export enum CodegenContractStandard {
  CodegenERC20 = 'ERC20',
  CodegenERC721 = 'ERC721',
  CodegenERC1155 = 'ERC1155',
}

export type CodegenContractStandardInput = {
  eq?: InputMaybe<CodegenContractStandard>;
  in?: InputMaybe<Array<CodegenContractStandard>>;
  notIn?: InputMaybe<Array<CodegenContractStandard>>;
};

export type CodegenContractTokenEventsConnection = {
  __typename?: 'ContractTokenEventsConnection';
  edges: Array<CodegenContractTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenContractTokenEventsConnectionEdge = {
  __typename?: 'ContractTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenContractsConnection = {
  __typename?: 'ContractsConnection';
  edges: Array<CodegenContractsEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenContractsEdge = {
  __typename?: 'ContractsEdge';
  cursor: Scalars['String'];
  node: CodegenContract;
};

/** Filter input for contracts */
export type CodegenContractsFilterInput = {
  address?: InputMaybe<CodegenStringInput>;
};

export type CodegenDateTimeInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
};

export type CodegenERC721Collection = CodegenCollection & {
  __typename?: 'ERC721Collection';
  address: Scalars['String'];
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CodegenCollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<CodegenERC721NFT>;
  nfts: CodegenERC721CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CodegenCollectionStats>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};

export type CodegenERC721CollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionCodegenholdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionCodegennftArgs = {
  tokenId: Scalars['String'];
};

export type CodegenERC721CollectionCodegennftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};

export type CodegenERC721CollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};

export type CodegenERC721CollectionCodegenstatsArgs = {
  filter?: InputMaybe<CodegenERC721CollectionStatsInput>;
};

export type CodegenERC721CollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC721CollectionStatsInput = {
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export type CodegenERC721CollectionTokensConnection = {
  __typename?: 'ERC721CollectionTokensConnection';
  edges: Array<CodegenERC721CollectionTokensEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC721CollectionTokensEdge = {
  __typename?: 'ERC721CollectionTokensEdge';
  cursor: Scalars['String'];
  node: CodegenERC721NFT;
};

export type CodegenERC721NFT = CodegenNFT & {
  __typename?: 'ERC721NFT';
  animationUrl?: Maybe<Scalars['String']>;
  /** The attributes of the token. */
  attributes?: Maybe<Array<CodegenTokenAttribute>>;
  collection?: Maybe<CodegenERC721Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use nft.wallet instead */
  holder?: Maybe<CodegenNFTWallet>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
  wallet?: Maybe<CodegenWallet>;
};

export type CodegenERC721NFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155Collection = CodegenCollection & {
  __typename?: 'ERC1155Collection';
  address: Scalars['String'];
  attributes?: Maybe<CodegenCollectionAttributesConnection>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<CodegenTokenUpload>>;
  baseTokenUri?: Maybe<Scalars['String']>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  contract?: Maybe<CodegenNFTContract>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  holders: CodegenCollectionHoldersConnection;
  /** The collection image. */
  image?: Maybe<Array<CodegenTokenUpload>>;
  name?: Maybe<Scalars['String']>;
  nft?: Maybe<CodegenERC1155NFT>;
  nfts: CodegenERC1155CollectionTokensConnection;
  ohlcvChart?: Maybe<Array<CodegenCollectionOHLCVChart>>;
  openseaMetadata?: Maybe<CodegenOpenSeaMetadata>;
  orderHistory?: Maybe<Array<CodegenCollectionOrderHistory>>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenCollectionTokenEventsConnection;
  totalSupply?: Maybe<Scalars['BigInt']>;
  twitterUsername?: Maybe<Scalars['String']>;
  wallets: CodegenCollectionWalletsConnection;
};

export type CodegenERC1155CollectionCodegenattributesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionCodegenholdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionCodegennftArgs = {
  tokenId: Scalars['String'];
};

export type CodegenERC1155CollectionCodegennftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionCodegenohlcvChartArgs = {
  filter?: InputMaybe<CodegenCollectionOhlcvChartInput>;
};

export type CodegenERC1155CollectionCodegenorderHistoryArgs = {
  filter?: InputMaybe<CodegenCollectionOrderHistoryInput>;
};

export type CodegenERC1155CollectionCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionTokensConnection = {
  __typename?: 'ERC1155CollectionTokensConnection';
  edges: Array<CodegenERC1155CollectionTokensEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC1155CollectionTokensEdge = {
  __typename?: 'ERC1155CollectionTokensEdge';
  cursor: Scalars['String'];
  node: CodegenERC1155NFT;
};

export type CodegenERC1155NFT = CodegenNFT & {
  __typename?: 'ERC1155NFT';
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<CodegenERC1155Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use nft.wallets instead */
  holders: CodegenERC1155NFTHoldersConnection;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
  wallets: CodegenERC1155NFTWalletsConnection;
};

export type CodegenERC1155NFTCodegenholdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155NFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155NFTCodegenwalletsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenERC1155NFTHoldersConnection = {
  __typename?: 'ERC1155NFTHoldersConnection';
  edges: Array<CodegenERC1155NFTHoldersConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC1155NFTHoldersConnectionEdge = {
  __typename?: 'ERC1155NFTHoldersConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenNFTWallet;
};

export type CodegenERC1155NFTWalletsConnection = {
  __typename?: 'ERC1155NFTWalletsConnection';
  edges: Array<CodegenERC1155NFTWalletsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenERC1155NFTWalletsConnectionEdge = {
  __typename?: 'ERC1155NFTWalletsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWallet;
};

export enum CodegenERCStandard {
  CodegenERC20 = 'ERC20',
  CodegenERC721 = 'ERC721',
  CodegenERC1155 = 'ERC1155',
}

export type CodegenEVMSchemaType = {
  __typename?: 'EVMSchemaType';
  collection?: Maybe<CodegenCollection>;
  collections: CodegenEVMSchemaTypeCollectionsConnection;
  contract?: Maybe<CodegenContract>;
  contracts: CodegenContractsConnection;
  nft?: Maybe<CodegenNFT>;
  tokenEvents: CodegenEVMSchemaTypeTokenEventsConnection;
  transaction?: Maybe<CodegenTransaction>;
  /** Returns a list of transactions. Ordered by block number and index. */
  transactions?: Maybe<CodegenEVMSchemaTypeTransactionsConnection>;
  trendingCollections: CodegenEVMSchemaTypeTrendingCollectionsConnection;
  walletByAddress?: Maybe<CodegenWallet>;
  walletByENS?: Maybe<CodegenWallet>;
};

export type CodegenEVMSchemaTypeCodegencollectionArgs = {
  contractAddress: Scalars['String'];
};

export type CodegenEVMSchemaTypeCodegencollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeCodegencontractArgs = {
  contractAddress: Scalars['String'];
};

export type CodegenEVMSchemaTypeCodegencontractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenContractsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeCodegennftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type CodegenEVMSchemaTypeCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeCodegentransactionArgs = {
  hash: Scalars['String'];
};

export type CodegenEVMSchemaTypeCodegentransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenEVMSchemaTypeCodegentrendingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTrendingCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenTrendingOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenEVMSchemaTypeCodegenwalletByAddressArgs = {
  address: Scalars['String'];
};

export type CodegenEVMSchemaTypeCodegenwalletByENSArgs = {
  ensName: Scalars['String'];
};

export type CodegenEVMSchemaTypeCollectionsConnection = {
  __typename?: 'EVMSchemaTypeCollectionsConnection';
  edges: Array<CodegenEVMSchemaTypeCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeCollectionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenCollection;
};

export type CodegenEVMSchemaTypeTokenEventsConnection = {
  __typename?: 'EVMSchemaTypeTokenEventsConnection';
  edges: Array<CodegenEVMSchemaTypeTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTokenEventsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenEVMSchemaTypeTransactionsConnection = {
  __typename?: 'EVMSchemaTypeTransactionsConnection';
  edges: Array<CodegenEVMSchemaTypeTransactionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTransactionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTransactionsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTransaction;
};

export type CodegenEVMSchemaTypeTrendingCollectionsConnection = {
  __typename?: 'EVMSchemaTypeTrendingCollectionsConnection';
  edges: Array<CodegenEVMSchemaTypeTrendingCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenEVMSchemaTypeTrendingCollectionsConnectionEdge = {
  __typename?: 'EVMSchemaTypeTrendingCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTrendingCollection;
};

export type CodegenIntegerInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
};

/** Marketplace where the token was sold */
export enum CodegenMarketplace {
  CodegenBLUR = 'BLUR',
  CodegenCRYPTOPUNKS = 'CRYPTOPUNKS',
  CodegenLOOKSRARE = 'LOOKSRARE',
  CodegenNIFTY_GATEWAY = 'NIFTY_GATEWAY',
  CodegenOPENSEA = 'OPENSEA',
  CodegenSEAPORT = 'SEAPORT',
  CodegenX2Y2 = 'X2Y2',
  CodegenZEROX = 'ZEROX',
}

export type CodegenMarketplaceInput = {
  eq?: InputMaybe<CodegenMarketplace>;
  in?: InputMaybe<Array<CodegenMarketplace>>;
  notIn?: InputMaybe<Array<CodegenMarketplace>>;
};

export type CodegenNFT = {
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<CodegenCollection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<CodegenNFTContract>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  tokenEvents: CodegenNFTTokenEventsConnection;
  tokenId: Scalars['BigInt'];
  /** The uploads of a token. */
  uploads?: Maybe<Array<CodegenTokenUpload>>;
};

export type CodegenNFTCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenNFTContract = CodegenContract & {
  __typename?: 'NFTContract';
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  collection?: Maybe<CodegenCollection>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};

export type CodegenNFTContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenNFTTokenEventsConnection = {
  __typename?: 'NFTTokenEventsConnection';
  edges: Array<CodegenNFTTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenNFTTokenEventsConnectionEdge = {
  __typename?: 'NFTTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenNFTWallet = {
  __typename?: 'NFTWallet';
  owner?: Maybe<CodegenWallet>;
  walletAddress?: Maybe<Scalars['String']>;
};

export type CodegenNFTsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Metadata provided by opensea */
export type CodegenOpenSeaMetadata = {
  __typename?: 'OpenSeaMetadata';
  /** Collection is hidden on Opensea. */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Collection verified by Opensea. */
  isVerified?: Maybe<Scalars['Boolean']>;
  /** Slug provided by Opensea (it might be stale). */
  unsafeSlug?: Maybe<Scalars['String']>;
};

/** Sort ascending (A-Z) or descending (Z-A) */
export enum CodegenOrderDirection {
  CodegenASC = 'ASC',
  CodegenDESC = 'DESC',
}

export type CodegenPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type CodegenQuery = {
  __typename?: 'Query';
  ethereum: CodegenEVMSchemaType;
  ethereumSepolia: CodegenEVMSchemaType;
  polygon: CodegenEVMSchemaType;
};

export type CodegenStringInput = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A token attribute */
export type CodegenTokenAttribute = {
  __typename?: 'TokenAttribute';
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type CodegenTokenBurnEvent = CodegenTokenEvent & {
  __typename?: 'TokenBurnEvent';
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenContract = CodegenContract & {
  __typename?: 'TokenContract';
  abi?: Maybe<Scalars['JSON']>;
  address: Scalars['String'];
  decimals?: Maybe<Scalars['BigInt']>;
  details?: Maybe<CodegenTokenDetailsType>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportedErcInterfaces?: Maybe<Array<Scalars['String']>>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents: CodegenContractTokenEventsConnection;
};

export type CodegenTokenContractCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenTokenDetailsType = {
  __typename?: 'TokenDetailsType';
  address: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type CodegenTokenEvent = {
  blockNumber: Scalars['Int'];
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

/** Filter input for token events */
export type CodegenTokenEventsFilterInput = {
  /** Filter token events by their block number */
  blockNumber?: InputMaybe<CodegenIntegerInput>;
  /** Filter token events by contract address */
  contractAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by their contract standard */
  contractStandard?: InputMaybe<CodegenContractStandardInput>;
  /** Filter token events by the "from" wallet */
  fromAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by the marketplace. It's only valid for SALE types */
  marketplace?: InputMaybe<CodegenMarketplaceInput>;
  /** Filter token events by their estimated confirmation date */
  timestamp?: InputMaybe<CodegenDateTimeInput>;
  /** Filter token events by the "to" wallet */
  toAddress?: InputMaybe<CodegenStringInput>;
  /** Filter token events by transaction hash */
  transactionHash?: InputMaybe<CodegenStringInput>;
  /** Filter token events by their type */
  type?: InputMaybe<CodegenTokenTransferTypeInput>;
  /** Filter token events by the "to" and "from" wallet */
  walletAddress?: InputMaybe<CodegenStringInput>;
};

export type CodegenTokenMintEvent = CodegenTokenEvent & {
  __typename?: 'TokenMintEvent';
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenSaleEvent = CodegenTokenEvent & {
  __typename?: 'TokenSaleEvent';
  blockNumber: Scalars['Int'];
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  /** Marketplace used to make the sale */
  marketplace?: Maybe<CodegenMarketplace>;
  receivedNft?: Maybe<CodegenNFT>;
  receivedTokenContract?: Maybe<CodegenContract>;
  /** The address of the token received as payment of the sale proceeds */
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  /** The id of the token received as payment of the sale proceeds */
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  /** The quantity of tokens received as payment of the sale proceeds */
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentNft?: Maybe<CodegenNFT>;
  sentTokenContract?: Maybe<CodegenContract>;
  sentTokenId?: Maybe<Scalars['BigInt']>;
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenSwapEvent = CodegenTokenEvent & {
  __typename?: 'TokenSwapEvent';
  blockNumber: Scalars['Int'];
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  receivedNft?: Maybe<CodegenNFT>;
  receivedTokenContract?: Maybe<CodegenContract>;
  receivedTokenContractAddress?: Maybe<Scalars['String']>;
  receivedTokenId?: Maybe<Scalars['BigInt']>;
  receivedTokenQuantity?: Maybe<Scalars['BigInt']>;
  sentNft?: Maybe<CodegenNFT>;
  sentTokenContract?: Maybe<CodegenContract>;
  sentTokenContractAddress: Scalars['String'];
  sentTokenContractERCStandard?: Maybe<CodegenERCStandard>;
  sentTokenId?: Maybe<Scalars['BigInt']>;
  sentTokenQuantity: Scalars['BigInt'];
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export type CodegenTokenTransferEvent = CodegenTokenEvent & {
  __typename?: 'TokenTransferEvent';
  blockNumber: Scalars['Int'];
  contract?: Maybe<CodegenContract>;
  contractAddress: Scalars['String'];
  contractERCStandard?: Maybe<CodegenERCStandard>;
  from?: Maybe<CodegenWallet>;
  fromAddress: Scalars['String'];
  nft?: Maybe<CodegenNFT>;
  timestamp: Scalars['DateTime'];
  to?: Maybe<CodegenWallet>;
  toAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['BigInt']>;
  tokenQuantity: Scalars['BigInt'];
  transaction?: Maybe<CodegenTransaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: CodegenTokenTransferType;
};

export enum CodegenTokenTransferType {
  CodegenBURN = 'BURN',
  CodegenMINT = 'MINT',
  CodegenSALE = 'SALE',
  CodegenSWAP = 'SWAP',
  CodegenTRANSFER = 'TRANSFER',
}

export type CodegenTokenTransferTypeInput = {
  eq?: InputMaybe<CodegenTokenTransferType>;
  in?: InputMaybe<Array<CodegenTokenTransferType>>;
  notIn?: InputMaybe<Array<CodegenTokenTransferType>>;
};

/** Token media uploads. */
export type CodegenTokenUpload = {
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

export type CodegenTransaction = {
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
export type CodegenTransactionsFilterInput = {
  blockNumber?: InputMaybe<CodegenIntegerInput>;
  fromAddress?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<CodegenDateTimeInput>;
  toAddress?: InputMaybe<Scalars['String']>;
};

export type CodegenTrendingCollection = {
  __typename?: 'TrendingCollection';
  collection?: Maybe<CodegenCollection>;
  last20Sales?: Maybe<Array<CodegenCollectionSale>>;
  stats?: Maybe<CodegenTrendingCollectionStats>;
};

/** Stats of a trending collection */
export type CodegenTrendingCollectionStats = {
  __typename?: 'TrendingCollectionStats';
  average?: Maybe<Scalars['Float']>;
  ceiling?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Filter input for trending collections */
export type CodegenTrendingCollectionsFilterInput = {
  /** A time period relative to the current time in which to filter trending collections by. */
  timePeriod?: InputMaybe<CodegenTrendingPeriod>;
  /** Custom time range in which to filter trending collections by. Available only to paid customers. */
  timeRange?: InputMaybe<CodegenDateTimeInput>;
};

export enum CodegenTrendingOrderBy {
  CodegenAVERAGE = 'AVERAGE',
  CodegenSALES = 'SALES',
  CodegenVOLUME = 'VOLUME',
}

export enum CodegenTrendingPeriod {
  CodegenFIFTEEN_MINUTES = 'FIFTEEN_MINUTES',
  CodegenFIVE_MINUTES = 'FIVE_MINUTES',
  CodegenONE_DAY = 'ONE_DAY',
  CodegenONE_HOUR = 'ONE_HOUR',
  CodegenONE_MINUTE = 'ONE_MINUTE',
  CodegenSEVEN_DAYS = 'SEVEN_DAYS',
  CodegenTHIRTY_MINUTES = 'THIRTY_MINUTES',
  CodegenTWELVE_HOURS = 'TWELVE_HOURS',
}

export type CodegenWallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  ensName?: Maybe<Scalars['String']>;
  /** @deprecated Use wallet.collection instead. */
  heldCollection?: Maybe<CodegenWalletCollection>;
  /** @deprecated Use wallet.collections instead. */
  heldCollections: CodegenWalletHeldCollectionsConnection;
  /** @deprecated Use wallet.nft instead. */
  heldNft?: Maybe<CodegenWalletNFT>;
  /** @deprecated Use wallet.nfts instead. */
  heldNfts: CodegenWalletHeldNFTsConnection;
  /** @deprecated Use wallet.tokenBalances instead. */
  heldTokenBalances: CodegenWalletHeldTokenBalancesConnection;
  tokenBalances: CodegenWalletTokenBalancesConnection;
  tokenEvents: CodegenWalletTokenEventsConnection;
  /** Returns a list of transactions this wallet is associated with. Ordered by block number and index. */
  transactions: CodegenWalletTransactionsConnection;
  walletCollection?: Maybe<CodegenWalletCollection>;
  walletCollections: CodegenWalletWalletCollectionsConnection;
  walletNFT?: Maybe<CodegenWalletNFT>;
  walletNFTs: CodegenWalletNFTsConnection;
};

export type CodegenWalletCodegenheldCollectionArgs = {
  collectionAddress: Scalars['String'];
};

export type CodegenWalletCodegenheldCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletCollectionOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegenheldNftArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type CodegenWalletCodegenheldNftsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletNFTsOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegenheldTokenBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletTokenBalanceOrder>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegentokenBalancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletTokenBalanceOrder>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegentokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CodegenWalletCodegentransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenTransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegenwalletCollectionArgs = {
  collectionAddress: Scalars['String'];
};

export type CodegenWalletCodegenwalletCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletCollectionOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCodegenwalletNFTArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type CodegenWalletCodegenwalletNFTsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CodegenWalletNFTsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CodegenWalletNFTsOrderBy>;
  orderDirection?: InputMaybe<CodegenOrderDirection>;
};

export type CodegenWalletCollection = {
  __typename?: 'WalletCollection';
  collection?: Maybe<CodegenCollection>;
  collectionAddress?: Maybe<Scalars['String']>;
  /** @deprecated Use nftsCount instead. */
  heldTokensCount: Scalars['BigInt'];
  nftsCount: Scalars['BigInt'];
};

export enum CodegenWalletCollectionOrderBy {
  CodegenDATE_ACQUIRED = 'DATE_ACQUIRED',
  CodegenNAME = 'NAME',
}

/** Filter of collections in a wallet */
export type CodegenWalletCollectionsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export type CodegenWalletHeldCollectionsConnection = {
  __typename?: 'WalletHeldCollectionsConnection';
  edges: Array<CodegenWalletHeldCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletHeldCollectionsConnectionEdge = {
  __typename?: 'WalletHeldCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletCollection;
};

export type CodegenWalletHeldNFTsConnection = {
  __typename?: 'WalletHeldNFTsConnection';
  edges: Array<CodegenWalletHeldNFTsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletHeldNFTsConnectionEdge = {
  __typename?: 'WalletHeldNFTsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletNFT;
};

export type CodegenWalletHeldTokenBalancesConnection = {
  __typename?: 'WalletHeldTokenBalancesConnection';
  edges: Array<CodegenWalletHeldTokenBalancesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletHeldTokenBalancesConnectionEdge = {
  __typename?: 'WalletHeldTokenBalancesConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletTokenBalance;
};

export type CodegenWalletNFT = {
  __typename?: 'WalletNFT';
  /** @deprecated Use nftsCount instead. */
  heldNftCount?: Maybe<Scalars['Int']>;
  nft?: Maybe<CodegenNFT>;
  nftsCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletNFTsConnection = {
  __typename?: 'WalletNFTsConnection';
  edges: Array<CodegenWalletNFTsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletNFTsConnectionEdge = {
  __typename?: 'WalletNFTsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletNFT;
};

/** Filter of nfts in a wallet */
export type CodegenWalletNFTsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum CodegenWalletNFTsOrderBy {
  CodegenDATE_ACQUIRED = 'DATE_ACQUIRED',
  CodegenNAME = 'NAME',
}

export type CodegenWalletTokenBalance = {
  __typename?: 'WalletTokenBalance';
  contract?: Maybe<CodegenTokenContract>;
  contractAddress: Scalars['String'];
  totalBalance: Scalars['BigInt'];
};

/** Sort wallet token balance */
export enum CodegenWalletTokenBalanceOrder {
  CodegenCONTRACT_ADDRESS = 'CONTRACT_ADDRESS',
  CodegenNAME = 'NAME',
  CodegenSYMBOL = 'SYMBOL',
  CodegenTOTAL_BALANCE = 'TOTAL_BALANCE',
}

export type CodegenWalletTokenBalancesConnection = {
  __typename?: 'WalletTokenBalancesConnection';
  edges: Array<CodegenWalletTokenBalancesConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTokenBalancesConnectionEdge = {
  __typename?: 'WalletTokenBalancesConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletTokenBalance;
};

export type CodegenWalletTokenEventsConnection = {
  __typename?: 'WalletTokenEventsConnection';
  edges: Array<CodegenWalletTokenEventsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTokenEventsConnectionEdge = {
  __typename?: 'WalletTokenEventsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenTokenEvent;
};

export type CodegenWalletTransactionsConnection = {
  __typename?: 'WalletTransactionsConnection';
  edges: Array<CodegenWalletTransactionsEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletTransactionsEdge = {
  __typename?: 'WalletTransactionsEdge';
  cursor: Scalars['String'];
  node: CodegenTransaction;
};

export type CodegenWalletWalletCollectionsConnection = {
  __typename?: 'WalletWalletCollectionsConnection';
  edges: Array<CodegenWalletWalletCollectionsConnectionEdge>;
  pageInfo: CodegenPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodegenWalletWalletCollectionsConnectionEdge = {
  __typename?: 'WalletWalletCollectionsConnectionEdge';
  cursor: Scalars['String'];
  node: CodegenWalletCollection;
};

export type CodegenEthMainnetWalletNFTsByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthMainnetWalletNFTsByContractAddressQuery = {
  __typename?: 'Query';
  ethereum: {
    __typename?: 'EVMSchemaType';
  } & CodegenNftsByContractAddressFragmentFragment;
};

export type CodegenEthMainnetWalletNFTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthMainnetWalletNFTsByAddressQuery = {
  __typename?: 'Query';
  ethereum: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByAddressFragmentFragment;
};

export type CodegenEthMainnetWalletNFTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthMainnetWalletNFTsByEnsQuery = {
  __typename?: 'Query';
  ethereum: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByEnsFragmentFragment;
};

export type CodegenEthSepoliaWalletNFTsByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthSepoliaWalletNFTsByContractAddressQuery = {
  __typename?: 'Query';
  ethereumSepolia: {
    __typename?: 'EVMSchemaType';
  } & CodegenNftsByContractAddressFragmentFragment;
};

export type CodegenEthSepoliaWalletNFTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthSepoliaWalletNFTsByAddressQuery = {
  __typename?: 'Query';
  ethereumSepolia: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByAddressFragmentFragment;
};

export type CodegenEthSepoliaWalletNFTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenEthSepoliaWalletNFTsByEnsQuery = {
  __typename?: 'Query';
  ethereumSepolia: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByEnsFragmentFragment;
};

export type CodegenERC1155NFTNodeFragment = {
  __typename?: 'ERC1155NFT';
  animationUrl?: string | null;
  collectionSlug?: string | null;
  contractAddress: string;
  description?: string | null;
  externalUrl?: string | null;
  metadata?: any | null;
  name?: string | null;
  tokenId: any;
  wallets: {
    __typename?: 'ERC1155NFTWalletsConnection';
    edges: Array<{
      __typename?: 'ERC1155NFTWalletsConnectionEdge';
      node: { __typename?: 'Wallet'; address: string; ensName?: string | null };
    }>;
  };
};

export type CodegenERC721NFTNodeFragment = {
  __typename?: 'ERC721NFT';
  animationUrl?: string | null;
  collectionSlug?: string | null;
  contractAddress: string;
  description?: string | null;
  externalUrl?: string | null;
  metadata?: any | null;
  name?: string | null;
  tokenId: any;
  attributes?: Array<{
    __typename?: 'TokenAttribute';
    name: string;
    value: string;
  }> | null;
  wallet?: {
    __typename?: 'Wallet';
    address: string;
    ensName?: string | null;
  } | null;
};

export type CodegenWalletNFTNodeFragment = {
  __typename?: 'WalletNFT';
  nft?:
    | {
        __typename?: 'ERC721NFT';
        animationUrl?: string | null;
        collectionSlug?: string | null;
        contractAddress: string;
        description?: string | null;
        externalUrl?: string | null;
        metadata?: any | null;
        name?: string | null;
        tokenId: any;
      }
    | {
        __typename?: 'ERC1155NFT';
        animationUrl?: string | null;
        collectionSlug?: string | null;
        contractAddress: string;
        description?: string | null;
        externalUrl?: string | null;
        metadata?: any | null;
        name?: string | null;
        tokenId: any;
      }
    | null;
};

export type CodegenNftsByContractAddressFragmentFragment = {
  __typename?: 'EVMSchemaType';
  collection?:
    | {
        __typename: 'ERC721Collection';
        nfts: {
          __typename?: 'ERC721CollectionTokensConnection';
          pageInfo: { __typename?: 'PageInfo' } & CodegenPaginationFragment;
          edges: Array<{
            __typename?: 'ERC721CollectionTokensEdge';
            node: { __typename?: 'ERC721NFT' } & CodegenERC721NFTNodeFragment;
          }>;
        };
      }
    | {
        __typename: 'ERC1155Collection';
        nfts: {
          __typename?: 'ERC1155CollectionTokensConnection';
          pageInfo: { __typename?: 'PageInfo' } & CodegenPaginationFragment;
          edges: Array<{
            __typename?: 'ERC1155CollectionTokensEdge';
            node: { __typename?: 'ERC1155NFT' } & CodegenERC1155NFTNodeFragment;
          }>;
        };
      }
    | null;
};

export type CodegenWalletByAddressFragmentFragment = {
  __typename?: 'EVMSchemaType';
  walletByAddress?: {
    __typename?: 'Wallet';
    address: string;
    ensName?: string | null;
    walletNFTs: {
      __typename?: 'WalletNFTsConnection';
      pageInfo: { __typename?: 'PageInfo' } & CodegenPaginationFragment;
      edges: Array<{
        __typename?: 'WalletNFTsConnectionEdge';
        node: { __typename?: 'WalletNFT' } & CodegenWalletNFTNodeFragment;
      }>;
    };
  } | null;
};

export type CodegenWalletByEnsFragmentFragment = {
  __typename?: 'EVMSchemaType';
  walletByENS?: {
    __typename?: 'Wallet';
    address: string;
    ensName?: string | null;
    walletNFTs: {
      __typename?: 'WalletNFTsConnection';
      pageInfo: { __typename?: 'PageInfo' } & CodegenPaginationFragment;
      edges: Array<{
        __typename?: 'WalletNFTsConnectionEdge';
        node: { __typename?: 'WalletNFT' } & CodegenWalletNFTNodeFragment;
      }>;
    };
  } | null;
};

export type CodegenPaginationFragment = {
  __typename?: 'PageInfo';
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
};

export type CodegenPolygonMainnetNFTsByContractAddressQueryVariables = Exact<{
  contractAddress: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenPolygonMainnetNFTsByContractAddressQuery = {
  __typename?: 'Query';
  polygon: {
    __typename?: 'EVMSchemaType';
  } & CodegenNftsByContractAddressFragmentFragment;
};

export type CodegenPolygonMainnetWalletNFTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenPolygonMainnetWalletNFTsByAddressQuery = {
  __typename?: 'Query';
  polygon: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByAddressFragmentFragment;
};

export type CodegenPolygonMainnetWalletNFTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

export type CodegenPolygonMainnetWalletNFTsByEnsQuery = {
  __typename?: 'Query';
  polygon: {
    __typename?: 'EVMSchemaType';
  } & CodegenWalletByEnsFragmentFragment;
};

export const CodegenPaginationFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenPaginationFragment, unknown>;
export const CodegenERC1155NFTNodeFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC1155NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC1155NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ensName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenERC1155NFTNodeFragment, unknown>;
export const CodegenERC721NFTNodeFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC721NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC721NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallet' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenERC721NFTNodeFragment, unknown>;
export const CodegenNftsByContractAddressFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NftsByContractAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contractAddress' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC1155Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC1155NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC721Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC721NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC1155NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC1155NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ensName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC721NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC721NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallet' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenNftsByContractAddressFragmentFragment,
  unknown
>;
export const CodegenWalletNFTNodeFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenWalletNFTNodeFragment, unknown>;
export const CodegenWalletByAddressFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByAddress' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'address' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenWalletByAddressFragmentFragment, unknown>;
export const CodegenWalletByEnsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByEnsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByENS' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ensName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ensName' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CodegenWalletByEnsFragmentFragment, unknown>;
export const CodegenEthMainnetWalletNFTsByContractAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthMainnetWalletNFTsByContractAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contractAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereum' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NftsByContractAddressFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC1155NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC1155NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ensName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC721NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC721NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallet' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NftsByContractAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contractAddress' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC1155Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC1155NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC721Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC721NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthMainnetWalletNFTsByContractAddressQuery,
  CodegenEthMainnetWalletNFTsByContractAddressQueryVariables
>;
export const CodegenEthMainnetWalletNFTsByAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthMainnetWalletNFTsByAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'address' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereum' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByAddressFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByAddress' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'address' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthMainnetWalletNFTsByAddressQuery,
  CodegenEthMainnetWalletNFTsByAddressQueryVariables
>;
export const CodegenEthMainnetWalletNFTsByEnsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthMainnetWalletNFTsByEns' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'ensName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereum' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByEnsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByEnsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByENS' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ensName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ensName' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthMainnetWalletNFTsByEnsQuery,
  CodegenEthMainnetWalletNFTsByEnsQueryVariables
>;
export const CodegenEthSepoliaWalletNFTsByContractAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthSepoliaWalletNFTsByContractAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contractAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereumSepolia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NftsByContractAddressFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC1155NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC1155NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ensName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC721NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC721NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallet' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NftsByContractAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contractAddress' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC1155Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC1155NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC721Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC721NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthSepoliaWalletNFTsByContractAddressQuery,
  CodegenEthSepoliaWalletNFTsByContractAddressQueryVariables
>;
export const CodegenEthSepoliaWalletNFTsByAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthSepoliaWalletNFTsByAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'address' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereumSepolia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByAddressFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByAddress' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'address' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthSepoliaWalletNFTsByAddressQuery,
  CodegenEthSepoliaWalletNFTsByAddressQueryVariables
>;
export const CodegenEthSepoliaWalletNFTsByEnsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'EthSepoliaWalletNFTsByEns' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'ensName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ethereumSepolia' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByEnsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByEnsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByENS' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ensName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ensName' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenEthSepoliaWalletNFTsByEnsQuery,
  CodegenEthSepoliaWalletNFTsByEnsQueryVariables
>;
export const CodegenPolygonMainnetNFTsByContractAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PolygonMainnetNFTsByContractAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'contractAddress' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'polygon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NftsByContractAddressFragment',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC1155NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC1155NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ensName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ERC721NFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ERC721NFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'animationUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attributes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'collectionSlug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'contractAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'wallet' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NftsByContractAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'contractAddress' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC1155Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC1155NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ERC721Collection' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nfts' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'first' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'after' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'after' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageInfo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'Pagination' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'edges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'node' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ERC721NFTNode',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenPolygonMainnetNFTsByContractAddressQuery,
  CodegenPolygonMainnetNFTsByContractAddressQueryVariables
>;
export const CodegenPolygonMainnetWalletNFTsByAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PolygonMainnetWalletNFTsByAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'address' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'polygon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByAddressFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByAddressFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByAddress' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'address' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenPolygonMainnetWalletNFTsByAddressQuery,
  CodegenPolygonMainnetWalletNFTsByAddressQueryVariables
>;
export const CodegenPolygonMainnetWalletNFTsByEnsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PolygonMainnetWalletNFTsByEns' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'ensName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'polygon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'WalletByEnsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Pagination' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageInfo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hasPreviousPage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'startCursor' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletNFTNode' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'WalletNFT' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nft' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'animationUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'collectionSlug' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contractAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'metadata' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenId' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'WalletByEnsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EVMSchemaType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'walletByENS' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ensName' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ensName' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ensName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'walletNFTs' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'first' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'Pagination' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'WalletNFTNode',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CodegenPolygonMainnetWalletNFTsByEnsQuery,
  CodegenPolygonMainnetWalletNFTsByEnsQueryVariables
>;
