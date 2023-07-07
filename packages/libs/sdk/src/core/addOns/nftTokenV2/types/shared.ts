export type TokenNFTRpcResponse<
  T extends Record<string, unknown> | Record<string, unknown>[]
> = {
  jsonrpc: string;
  id: number;
  result: T;
};

type NftTrait = {
  trait_type: string;
  value: string;
};

export type RpcNftAsset = {
  collectionName: string;
  collectionTokenId: string;
  collectionAddress: string;
  name: string;
  description: string;
  imageUrl: string;
  traits: NftTrait[];
  chain: string;
  network: string;
};

export type RPCTokenMetadata = {
  name: string | null;
  symbol: string | null;
  contractAddress: string;
  decimals: string | null;
  genesisBlock: string | null;
  genesisTransaction: string | null;
};
