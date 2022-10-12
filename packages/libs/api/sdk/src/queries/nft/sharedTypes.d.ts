/**
 * @todo replace this with graphql automatic schema generation
 */

import { Connection } from 'net';

export interface Wallet {
  ensName: string;
  address: string;
  tokens: Connection<NFT>;
}

export interface Contract {
  address: string;
  isVerified: boolean;
  tokenStandard: string;
  tokenSupply: number;
  name: string;
  symbol: string;
  tokens: Connection<NFTBase>;
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

export interface WalletNFTsQueryResponse {
  wallet: Wallet | null;
}

export interface ContractNFTsQueryResponse {
  contract: Contract | null;
}
