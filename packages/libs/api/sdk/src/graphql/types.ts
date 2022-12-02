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
  link__Import: any;
};

export type Collection = {
  address: Scalars['String'];
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents?: Maybe<CollectionTokenEventsConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A contract's attribute count */
export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  /** The trait key. */
  name: Scalars['String'];
  /** The `100 * value_count / total_tokens for the contract. */
  rarity?: Maybe<Scalars['Float']>;
  /** The value of the trait. */
  value?: Maybe<Scalars['String']>;
  /** The total count for this name: value pair in the contract. */
  valueCount: Scalars['Float'];
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
  edges: Array<Maybe<CollectionTokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionTokenEventsEdge = {
  __typename?: 'CollectionTokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type CollectionsConnection = {
  __typename?: 'CollectionsConnection';
  edges: Array<Maybe<CollectionsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionsEdge = {
  __typename?: 'CollectionsEdge';
  cursor: Scalars['String'];
  node: Collection;
};

export type ContractType = {
  __typename?: 'ContractType';
  address: Scalars['String'];
  collection?: Maybe<Collection>;
  /** Contract with verified ABI */
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  supportsERC165Interface?: Maybe<Scalars['Boolean']>;
  supportsERC721Interface?: Maybe<Scalars['Boolean']>;
  supportsERC1155Interface?: Maybe<Scalars['Boolean']>;
  symbol?: Maybe<Scalars['String']>;
};

export type ContractsConnection = {
  __typename?: 'ContractsConnection';
  edges: Array<Maybe<ContractsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContractsEdge = {
  __typename?: 'ContractsEdge';
  cursor: Scalars['String'];
  node: ContractType;
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
  attributes?: Maybe<Array<CollectionAttribute>>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CollectionStats>;
  symbol?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenEvents?: Maybe<CollectionTokenEventsConnection>;
  tokens?: Maybe<Erc721CollectionTokensConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type Erc721CollectionStatsArgs = {
  input?: InputMaybe<Erc721CollectionStatsInput>;
};


export type Erc721CollectionTokenArgs = {
  tokenId: Scalars['String'];
};


export type Erc721CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721CollectionTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc721CollectionStatsInput = {
  timeRange?: InputMaybe<DateTimeInput>;
};

export type Erc721CollectionTokensConnection = {
  __typename?: 'ERC721CollectionTokensConnection';
  edges: Array<Maybe<Erc721CollectionTokensEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc721CollectionTokensEdge = {
  __typename?: 'ERC721CollectionTokensEdge';
  cursor: Scalars['String'];
  node: Token;
};

export type Erc721Token = Token & {
  __typename?: 'ERC721Token';
  animationUrl?: Maybe<Scalars['String']>;
  /** The attributes of the token. */
  attributes?: Maybe<Array<TokenAttribute>>;
  collection?: Maybe<Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<ContractType>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<WalletType>;
  ownerAddress?: Maybe<Scalars['String']>;
  tokenEvents?: Maybe<Erc721TokenTokenEventsConnection>;
  tokenId: Scalars['BigInt'];
  /** The uploads of the token. */
  uploads?: Maybe<Array<TokenUpload>>;
};


export type Erc721TokenTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc721TokenTokenEventsConnection = {
  __typename?: 'ERC721TokenTokenEventsConnection';
  edges: Array<Maybe<Erc721TokenTokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc721TokenTokenEventsEdge = {
  __typename?: 'ERC721TokenTokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type Erc721TrendingCollections = TrendingCollections & {
  __typename?: 'ERC721TrendingCollections';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  ercStandard?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stats?: Maybe<CollectionStats>;
  symbol?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenEvents?: Maybe<TrendingCollectionTokenEventsConnection>;
  tokens?: Maybe<Erc721TrendingCollectionsTokensConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type Erc721TrendingCollectionsStatsArgs = {
  input?: InputMaybe<Erc721TrendingCollectionsStatsInput>;
};


export type Erc721TrendingCollectionsTokenArgs = {
  tokenId: Scalars['String'];
};


export type Erc721TrendingCollectionsTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc721TrendingCollectionsTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc721TrendingCollectionsStatsInput = {
  timeRange?: InputMaybe<DateTimeInput>;
};

export type Erc721TrendingCollectionsTokensConnection = {
  __typename?: 'ERC721TrendingCollectionsTokensConnection';
  edges: Array<Maybe<Erc721TrendingCollectionsTokensEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc721TrendingCollectionsTokensEdge = {
  __typename?: 'ERC721TrendingCollectionsTokensEdge';
  cursor: Scalars['String'];
  node: Token;
};

export type Erc1155Collection = Collection & {
  __typename?: 'ERC1155Collection';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  /** Collection banner image. */
  bannerImage?: Maybe<Array<TokenUpload>>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  /** The collection image. */
  image?: Maybe<Array<TokenUpload>>;
  name?: Maybe<Scalars['String']>;
  openseaMetadata?: Maybe<OpenSeaMetadata>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenEvents?: Maybe<CollectionTokenEventsConnection>;
  tokens?: Maybe<Erc1155CollectionTokensConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type Erc1155CollectionTokenArgs = {
  tokenId: Scalars['String'];
};


export type Erc1155CollectionTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155CollectionTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155CollectionTokensConnection = {
  __typename?: 'ERC1155CollectionTokensConnection';
  edges: Array<Maybe<Erc1155CollectionTokensEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155CollectionTokensEdge = {
  __typename?: 'ERC1155CollectionTokensEdge';
  cursor: Scalars['String'];
  node: Token;
};

export type Erc1155Token = Token & {
  __typename?: 'ERC1155Token';
  animationUrl?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  collectionSlug?: Maybe<Scalars['String']>;
  contract?: Maybe<ContractType>;
  contractAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
  ownerAddress?: Maybe<Scalars['String']>;
  tokenEvents?: Maybe<Erc1155TokenTokenEventsConnection>;
  tokenId: Scalars['BigInt'];
};


export type Erc1155TokenTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155TokenTokenEventsConnection = {
  __typename?: 'ERC1155TokenTokenEventsConnection';
  edges: Array<Maybe<Erc1155TokenTokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155TokenTokenEventsEdge = {
  __typename?: 'ERC1155TokenTokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type Erc1155TrendingCollections = TrendingCollections & {
  __typename?: 'ERC1155TrendingCollections';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  ercStandard?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenEvents?: Maybe<TrendingCollectionTokenEventsConnection>;
  tokens?: Maybe<Erc1155TrendingCollectionsTokensConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type Erc1155TrendingCollectionsTokenArgs = {
  tokenId: Scalars['String'];
};


export type Erc1155TrendingCollectionsTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type Erc1155TrendingCollectionsTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Erc1155TrendingCollectionsTokensConnection = {
  __typename?: 'ERC1155TrendingCollectionsTokensConnection';
  edges: Array<Maybe<Erc1155TrendingCollectionsTokensEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Erc1155TrendingCollectionsTokensEdge = {
  __typename?: 'ERC1155TrendingCollectionsTokensEdge';
  cursor: Scalars['String'];
  node: Token;
};

export type EvmSchemaType = {
  __typename?: 'EVMSchemaType';
  collection?: Maybe<Collection>;
  collections: CollectionsConnection;
  contract?: Maybe<ContractType>;
  contracts: ContractsConnection;
  token?: Maybe<Token>;
  tokenEvents?: Maybe<TokenEventsConnection>;
  trendingCollections: TrendingCollectionsConnection;
  walletByAddress?: Maybe<WalletType>;
  walletByENS?: Maybe<WalletType>;
};


export type EvmSchemaTypeCollectionArgs = {
  contractAddress: Scalars['String'];
};


export type EvmSchemaTypeCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EvmSchemaTypeContractArgs = {
  contractAddress: Scalars['String'];
};


export type EvmSchemaTypeContractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type EvmSchemaTypeTokenArgs = {
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


export type EvmSchemaTypeTrendingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrendingOrderByType>;
  orderDirection?: InputMaybe<OrderDirectionType>;
  timePeriod?: InputMaybe<TrendingPeriodType>;
  timeRange?: InputMaybe<DateTimeInput>;
};


export type EvmSchemaTypeWalletByAddressArgs = {
  address: Scalars['String'];
};


export type EvmSchemaTypeWalletByEnsArgs = {
  ensName: Scalars['String'];
};

export enum HeldCollectionOrderByEnum {
  DateAcquired = 'dateAcquired',
  Name = 'name'
}

export type HeldCollectionsConnection = {
  __typename?: 'HeldCollectionsConnection';
  edges: Array<Maybe<HeldCollectionsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HeldCollectionsEdge = {
  __typename?: 'HeldCollectionsEdge';
  cursor: Scalars['String'];
  node: Collection;
};

/** Filter input for held collections */
export type HeldCollectionsFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export type IntegerInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
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
export enum OrderDirectionType {
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
  _service: _Service;
  ethereum: EvmSchemaType;
};

export type StringInput = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type Token = {
  contractAddress: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  tokenId: Scalars['BigInt'];
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
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

export type TokenEvent = {
  blockNumber: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

export enum TokenEventType {
  Burn = 'Burn',
  Mint = 'Mint',
  Sale = 'Sale',
  Swap = 'Swap',
  Transfer = 'Transfer'
}

export type TokenEventsConnection = {
  __typename?: 'TokenEventsConnection';
  edges: Array<Maybe<TokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TokenEventsEdge = {
  __typename?: 'TokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
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
  type?: InputMaybe<TokenEventType>;
  /** Filter token events by their type */
  typeIn?: InputMaybe<Array<TokenEventType>>;
};

export type TokenMintEvent = TokenEvent & {
  __typename?: 'TokenMintEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

export type TokenSaleEvent = TokenEvent & {
  __typename?: 'TokenSaleEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

export type TokenSwapEvent = TokenEvent & {
  __typename?: 'TokenSwapEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

export type TokenTransferEvent = TokenEvent & {
  __typename?: 'TokenTransferEvent';
  blockNumber: Scalars['Int'];
  fromAddress: Scalars['String'];
  timestamp: Scalars['DateTime'];
  toAddress: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactionHash?: Maybe<Scalars['String']>;
  transferIndex: Scalars['Int'];
  type: TokenEventType;
};

/** Token media uploads. */
export type TokenUpload = {
  __typename?: 'TokenUpload';
  /** The upload height. */
  height?: Maybe<Scalars['Float']>;
  /** The upload mimeType. */
  mimeType: Scalars['String'];
  /** The upload url. */
  url: Scalars['String'];
  /** The upload width. */
  width?: Maybe<Scalars['Float']>;
};

export type TokensFilterInput = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum TokensOrderBy {
  DateAcquired = 'DATE_ACQUIRED',
  Name = 'NAME'
}

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

export type TrendingCollectionTokenEventsConnection = {
  __typename?: 'TrendingCollectionTokenEventsConnection';
  edges: Array<Maybe<TrendingCollectionTokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrendingCollectionTokenEventsEdge = {
  __typename?: 'TrendingCollectionTokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type TrendingCollections = {
  address: Scalars['String'];
  circulatingSupply?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  ercStandard?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenEvents?: Maybe<TrendingCollectionTokenEventsConnection>;
  totalSupply?: Maybe<Scalars['BigInt']>;
};


export type TrendingCollectionsTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TrendingCollectionsConnection = {
  __typename?: 'TrendingCollectionsConnection';
  edges: Array<Maybe<TrendingCollectionsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TrendingCollectionsEdge = {
  __typename?: 'TrendingCollectionsEdge';
  cursor: Scalars['String'];
  node: TrendingCollections;
};

export enum TrendingOrderByType {
  Average = 'AVERAGE',
  Sales = 'SALES',
  Volume = 'VOLUME'
}

export enum TrendingPeriodType {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneDay = 'ONE_DAY',
  OneHour = 'ONE_HOUR',
  OneMinute = 'ONE_MINUTE',
  SevenDays = 'SEVEN_DAYS',
  ThirtyMinutes = 'THIRTY_MINUTES',
  TwelveHours = 'TWELVE_HOURS'
}

export type WalletTokenEventsConnection = {
  __typename?: 'WalletTokenEventsConnection';
  edges: Array<Maybe<WalletTokenEventsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTokenEventsEdge = {
  __typename?: 'WalletTokenEventsEdge';
  cursor: Scalars['String'];
  node: TokenEvent;
};

export type WalletTokensConnection = {
  __typename?: 'WalletTokensConnection';
  edges: Array<Maybe<WalletTokensEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTokensEdge = {
  __typename?: 'WalletTokensEdge';
  cursor: Scalars['String'];
  node: Token;
};

export type WalletTransactionsConnection = {
  __typename?: 'WalletTransactionsConnection';
  edges: Array<Maybe<WalletTransactionsEdge>>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WalletTransactionsEdge = {
  __typename?: 'WalletTransactionsEdge';
  cursor: Scalars['String'];
  node: Transaction;
};

export type WalletType = {
  __typename?: 'WalletType';
  address: Scalars['String'];
  ensName?: Maybe<Scalars['String']>;
  heldCollections?: Maybe<HeldCollectionsConnection>;
  token?: Maybe<Erc721Token>;
  tokenEvents?: Maybe<WalletTokenEventsConnection>;
  tokens?: Maybe<WalletTokensConnection>;
  transactions?: Maybe<WalletTransactionsConnection>;
};


export type WalletTypeHeldCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HeldCollectionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<HeldCollectionOrderByEnum>;
  orderDirection?: InputMaybe<OrderDirectionType>;
};


export type WalletTypeTokenArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


export type WalletTypeTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokenEventsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type WalletTypeTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokensOrderBy>;
  orderDirection?: InputMaybe<OrderDirectionType>;
};


export type WalletTypeTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TransactionsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type Nft_Erc721Token_Fragment = { __typename?: 'ERC721Token', animationUrl?: string | null, metadata?: any | null, name?: string | null, tokenId: any, contractAddress: string, attributes?: Array<{ __typename?: 'TokenAttribute', name: string, value: string }> | null, contract?: { __typename?: 'ContractType', address: string, isVerified?: boolean | null, name?: string | null, supportsERC165Interface?: boolean | null, supportsERC721Interface?: boolean | null, supportsERC1155Interface?: boolean | null, symbol?: string | null } | null };

export type Nft_Erc1155Token_Fragment = { __typename?: 'ERC1155Token', name?: string | null, tokenId: any, contractAddress: string };

export type NftFragment = Nft_Erc721Token_Fragment | Nft_Erc1155Token_Fragment;

export type PaginationFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type WalletNfTsByEnsQueryVariables = Exact<{
  ensName: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type WalletNfTsByEnsQuery = { __typename?: 'Query', ethereum: { __typename?: 'EVMSchemaType', walletByENS?: { __typename?: 'WalletType', address: string, tokens?: { __typename?: 'WalletTokensConnection', pageInfo: (
          { __typename?: 'PageInfo' }
          & PaginationFragment
        ), edges: Array<{ __typename?: 'WalletTokensEdge', node: (
            { __typename?: 'ERC721Token' }
            & Nft_Erc721Token_Fragment
          ) | (
            { __typename?: 'ERC1155Token' }
            & Nft_Erc1155Token_Fragment
          ) } | null> } | null } | null } };

export const Nft = gql`
    fragment Nft on Token {
  name
  tokenId
  contractAddress
  ... on ERC721Token {
    animationUrl
    metadata
    attributes {
      name
      value
    }
    contract {
      address
      isVerified
      name
      supportsERC165Interface
      supportsERC721Interface
      supportsERC1155Interface
      symbol
    }
  }
}
    `;
export const Pagination = gql`
    fragment Pagination on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const WalletNfTsByEns = gql`
    query WalletNFTsByEns($ensName: String!, $after: String, $first: Int) {
  ethereum {
    walletByENS(ensName: $ensName) {
      address
      tokens(after: $after, first: $first) {
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
}
    ${Pagination}
${Nft}`;