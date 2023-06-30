/* eslint-disable @nx/enforce-module-boundaries */
import { mainnet } from 'viem/chains';
import type API from '../../src/api';
import { SimplifyType } from '../../src/api/utils/helpers';
import { CoreContract } from './coreContract';
import {
  createClient,
  http,
  type Client,
  RpcSchemaOverride,
  publicActions,
  PublicClient,
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

type NFTAndTokenSchema = RpcSchemaOverride & NFTAndTokenMethods;

type FooSchema = RpcSchemaOverride &
  [
    {
      Method: 'foo';
      Parameters: [string];
      ReturnType: string;
    }
  ];

export type NFTAndTokenActions = {
  qn_fetchNFTs: (parameters: QNFetchNFTParams) => Promise<unknown>;
};

export type FooActions = {
  foo: (arg: string) => Promise<unknown>;
};

export const nftTokenActions = (client: Client): NFTAndTokenActions => ({
  async qn_fetchNFTs(args) {
    return await client.request<NFTAndTokenSchema>({
      method: 'qn_fetchNFTs',
      params: [args],
    });
  },
});

export const fooActions = (client: Client): FooActions => ({
  async foo(arg) {
    return await client.request<FooSchema>({
      method: 'foo',
      params: [arg],
    });
  },
});

export const qnActions = (client: Client): FooActions & NFTAndTokenActions => ({
  ...fooActions(client),
  ...nftTokenActions(client),
});

export class Core {
  readonly apiClient: API | null | undefined;
  readonly endpointUrl: string;
  readonly viem: typeof viem;

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl, apiClient }: CoreArguments) {
    this.endpointUrl = endpointUrl;
    this.viem = viem;
  }

  async createQNClient() {
    const qnClient = createClient({
      chain: mainnet,
      transport: http('hi'),
    }).extend(publicActions);

    return qnClient.extend(qnActions);
  }
}
