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
  tokens: Connection<NFTBase>;
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

export interface NFT extends NFTBase {
  contract: {
    address: string;
    symbol: string;
    name: string;
  };
}

export interface NFTBase {
  tokenId: string;
  images: {
    url: string;
  }[];
}

/*** Logs ***/

interface TokenEventLogs {
  contract: {
    address: string;
  };
  token: {
    tokenId: string;
    logs: BaseEventLog | OrderEventLog;
  };
}

interface OrderEventLog extends BaseEventLog {
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

export interface LogPainationInfo {
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
  Token: (TokenEventLogs & LogPainationInfo) | null;
}
