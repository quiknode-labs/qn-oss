/* eslint-disable @nx/enforce-module-boundaries */
import { createPublicClient, http, PublicClient } from 'viem';
import { mainnet } from 'viem/chains';
import type API from '../../src/api';
import { CoreContract } from './coreContract';
import { NFTTokenAddOn } from './nftTokenAddOn';
import * as viem from 'viem';
/* eslint-enable @nx/enforce-module-boundaries */

export interface CoreArguments {
  endpointUrl: string;
  network?: string;
  apiClient?: API | null | undefined; // TODO: check if this works with tree-shaking
}

export class Core {
  readonly public: PublicClient;
  readonly apiClient: API | null | undefined;
  readonly endpointUrl: string;
  readonly nftTokenAddOn: NFTTokenAddOn;
  readonly viem: typeof viem;

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl, network, apiClient }: CoreArguments) {
    this.apiClient = apiClient;
    this.endpointUrl = endpointUrl;

    this.public = createPublicClient({
      chain: mainnet,
      transport: http(endpointUrl),
    });
    this.nftTokenAddOn = new NFTTokenAddOn({ publicClient: this.public });
    this.viem = viem;
  }

  async getContract({
    address,
  }: {
    address: `0x${string}`;
  }): Promise<CoreContract['contract']> {
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

    await coreContract.setup();

    return coreContract.contract;
  }
}
