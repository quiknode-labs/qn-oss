import { createClient, http, type Client, publicActions } from 'viem';
import { type NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import { nftAndTokenActions } from './addOns/nftTokenV2/actions';
import {
  type QNCoreClientConfig,
  type CoreArguments,
  type QNCoreClient,
} from './coreTypes';
import { deriveNetworkFromUrl } from './networks';
import * as viem from 'viem';
import fetch from 'cross-fetch';

// TODO: is this the best way to handle this?
global.fetch = fetch;

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
}
