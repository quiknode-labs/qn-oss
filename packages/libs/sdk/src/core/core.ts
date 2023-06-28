/* eslint-disable @nx/enforce-module-boundaries */
import { mainnet } from 'viem/chains';
import type API from '../../src/api';
import { CoreContract } from './coreContract';
import {
  createClient,
  http,
  Transport,
  Chain,
  Account,
  Client,
  PublicRpcSchema,
  PublicActions,
} from 'viem';
import * as viem from 'viem';
/* eslint-enable @nx/enforce-module-boundaries */

export interface CoreArguments {
  endpointUrl: string;
  network?: string;
  apiClient?: API | null | undefined; // TODO: check if this works with tree-shaking
}

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

type NFTAndTokenSchema = PublicRpcSchema & NFTAndTokenMethods;

export type QNPublicActions<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
> = {
  qn_fetchNFTs: (parameters: QNFetchNFTParams) => Promise<unknown>;
};

export const qnPublicActions = <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
  TAccount extends Account | undefined = Account | undefined
>(
  client: Client<TTransport, TChain, TAccount>
): QNPublicActions<TTransport, TChain> => ({
  async qn_fetchNFTs(args) {
    return await client.request<NFTAndTokenSchema>({
      method: 'qn_fetchNFTs',
      params: [args],
    });
  },
});

export type QNPublicClient<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
> = Client<
  TTransport,
  TChain,
  undefined,
  NFTAndTokenSchema,
  QNPublicActions<TTransport, TChain>
>;

export class Core {
  readonly public: QNPublicClient;
  readonly apiClient: API | null | undefined;
  readonly endpointUrl: string;
  readonly viem: typeof viem;

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl, network, apiClient }: CoreArguments) {
    this.apiClient = apiClient;
    this.endpointUrl = endpointUrl;
    this.viem = viem;
    this.public = createClient({
      chain: mainnet,
      transport: http(endpointUrl),
    }).extend(qnPublicActions);
  }

  async getContract({ address }: { address: `0x${string}` }) {
    if (!this.apiClient) {
      throw new Error(
        'No sdk api client provided! This function requires an initialized SDK api client to be passed in the constructor.'
      );
    }

    const coreContract = new CoreContract({
      apiClient: this.apiClient,
      publicClient: this.public,
      address,
    });

    const contract = await coreContract.setupContract();

    return contract;
  }
}
