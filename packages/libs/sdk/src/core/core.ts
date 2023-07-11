import {
  createClient,
  http,
  type Client,
  publicActions,
  getContract,
  type Abi,
} from 'viem';
import { type NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import { nftAndTokenActions } from './addOns/nftTokenV2/actions';
import {
  type QNCoreClientConfig,
  type CoreArguments,
  type QNCoreClient,
  type CoreContractsArguments,
} from './coreTypes';
import { deriveNetworkFromUrl } from './networks';
import * as viem from 'viem';
import fetch from 'cross-fetch';

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export const buildQNActions = (config: QNCoreClientConfig) => {
  return (client: Client): NFTAndTokenActions => ({
    ...nftAndTokenActions(client, config),
  });
};

export class Core {
  readonly endpointUrl: string;
  readonly viem: typeof viem;
  readonly client: QNCoreClient;

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl, config = {} }: CoreArguments) {
    this.endpointUrl = endpointUrl;
    this.viem = viem;
    const baseClient = createClient({
      chain: deriveNetworkFromUrl(endpointUrl),
      transport: http(this.endpointUrl),
    }).extend(publicActions);

    const qnClient = baseClient.extend(buildQNActions(config));
    this.client = qnClient;
  }

  async setupContract({ apiClient, address, abi }: CoreContractsArguments) {
    if (!apiClient && !abi) {
      throw new Error(
        'No abi or apiClient provided to setupContract(), please provide one of these arguments'
      );
    }
    if (apiClient && !abi) {
      const details = await apiClient.contracts.getDetails({
        contractAddress: address,
      });
      const abi = details.contract?.abi;
      if (!abi) {
        throw new Error('No abi found for contract');
      }
    }

    const contract = getContract({
      address: address,
      abi: abi as Abi,
      publicClient: this.client,
    });

    return contract;
  }
}
