export type TokenNFTRpcResponse<
  T extends Record<string, unknown> | Record<string, unknown>[]
> = {
  jsonrpc: string;
  id: number;
  result: T;
};
