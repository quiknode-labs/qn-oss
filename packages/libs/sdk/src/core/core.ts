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

export type QNPublicActions = {
  qn_fetchNFTs: (parameters: QNFetchNFTParams) => Promise<unknown>;
};

export type FooActions = {
  foo: (arg: string) => Promise<unknown>;
};

export const qnPublicActions = (client: Client): QNPublicActions => ({
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

type AddOnMapping = {
  nftTokenAddOn: QNPublicActions;
  fooAddOn: FooActions;
};

type AddOnKeys = keyof AddOnMapping;
type ValueOf<T, U extends keyof T> = T[U];
type IntersectAddOns<T extends AddOnKeys[]> = T extends []
  ? unknown
  : { [K in T[number]]: AddOnMapping[K] }[T[number]];

let q: PublicClient & IntersectAddOns<['nftTokenAddOn']>;

export class Core {
  readonly apiClient: API | null | undefined;
  readonly endpointUrl: string;
  readonly viem: typeof viem;

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl, apiClient }: CoreArguments) {
    this.endpointUrl = endpointUrl;
    this.viem = viem;
  }

  async createQNClient<T extends Partial<keyof AddOnMapping>[]>(
    addOns: T
  ): Promise<PublicClient & IntersectAddOns<T>> {
    const qnClient = createClient({
      chain: mainnet,
      transport: http(this.endpointUrl),
    }).extend(publicActions);
    if (addOns.includes('nftTokenAddOn')) qnClient.extend(qnPublicActions);
    if (addOns.includes('fooAddOn')) qnClient.extend(fooActions);

    // @ts-expect-error
    return qnClient as PublicClient & IntersectAddOns<T>;
  }

  async getContract({
    address,
    apiClient,
  }: {
    address: `0x${string}`;
    apiClient?: API;
  }) {
    if (apiClient) {
      throw new Error(
        'No sdk api client provided! This function requires an initialized SDK api client to be passed in the constructor.'
      );
    }

    const contractClient = await this.createQNClient();
    const coreContract = new CoreContract({
      apiClient: apiClient,
      publicClient: contractClient,
      address,
    });

    const contract = await coreContract.setupContract();

    return contract;
  }
}
