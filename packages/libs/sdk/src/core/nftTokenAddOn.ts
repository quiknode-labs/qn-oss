/* eslint-disable @nx/enforce-module-boundaries */
import {
  PublicClient,
  PublicRpcSchema,
  RpcSchemaOverride,
  EIP1474Methods,
  EIP1193Parameters,
  EIP1193RequestFn,
} from 'viem';
/* eslint-enable @nx/enforce-module-boundaries */

// TODO: make more specific types and enforce them
interface QNFetchNFTParams {
  id?: string;
  wallet: string;
  contracts: string[];
  page?: number;
  perPage?: number;
  omitFields?: string;
}

type NFTAndTokenMethods = [
  {
    Method: 'qn_fetchNFTs';
    Parameters: [QNFetchNFTParams];
    ReturnType: string;
  }
];
type NFTAndTokenSchema = RpcSchemaOverride & NFTAndTokenMethods;

export class NFTTokenAddOn {
  readonly publicClient: PublicClient;

  constructor({ publicClient }: { publicClient: PublicClient }) {
    this.publicClient = publicClient;
  }

  async qn_fetchNFTs(args: QNFetchNFTParams) {
    console.log(args);
    const response = await this.publicClient.request<NFTAndTokenSchema>({
      method: 'qn_fetchNFTs',
      params: [args],
    });
    console.log(response);
    return response;
  }
}
