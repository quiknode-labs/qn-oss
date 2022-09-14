/**
 * @todo replace this with graphql automatic schema generation
 */

export interface Wallet {
  ensName: string;
  address: string;
  tokens: Connection<NFT>;
}

export interface NFT {
  tokenId: string;
  contract: {
    address: string;
    symbol: string;
    name: string;
  };
  images: {
    url: string;
  }[];
}

export interface WalletNFTsQueryResponse {
  wallet: Wallet | null;
}
