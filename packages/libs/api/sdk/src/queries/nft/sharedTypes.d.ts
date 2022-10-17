/**
 * @todo replace this with graphql automatic schema generation
 */

export interface Wallet {
  ensName: string;
  address: string;
  tokens: Connection<NFT>;
  tokensPageInfo: PaginationDetails;
}

export interface Contract {
  address: string;
  isVerified: boolean;
  tokenStandard: string;
  tokenSupply: number;
  name: string;
  symbol: string;
  tokens: Connection<NFTBase>;
  tokensPageInfo: PaginationDetails;
}

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

export interface PaginationDetails {
  endCursor: string;
  hasNextPage: string;
}

export interface WalletNFTsQueryResponse {
  wallet: Wallet | null;
}

export interface ContractNFTsQueryResponse {
  contract: Contract | null;
}
