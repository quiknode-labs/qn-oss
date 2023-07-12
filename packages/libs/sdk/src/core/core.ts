import { createClient, http, type Client, publicActions } from 'viem';
import { type NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import { nftAndTokenActions } from './addOns/nftTokenV2/actions';
import {
  type QNCoreClientConfig,
  type CoreArguments,
  type QNCoreClient,
} from './coreTypes';
import { deriveChainFromUrl } from './chains';
import { setupGlobalFetch } from '../lib/helpers/globalFetch';

export const buildQNActions = (config: QNCoreClientConfig) => {
  return (client: Client): NFTAndTokenActions => ({
    ...nftAndTokenActions(client, config),
  });
};

export class Core {
  readonly endpointUrl: string;
  readonly client: QNCoreClient;

  constructor({ endpointUrl, chain, config = {} }: CoreArguments) {
    setupGlobalFetch();
    this.endpointUrl = endpointUrl;
    const baseClient = createClient({
      chain: chain || deriveChainFromUrl(endpointUrl),
      transport: http(this.endpointUrl),
    }).extend(publicActions);

    const qnClient = baseClient.extend(buildQNActions(config));
    this.client = qnClient;
  }
}
