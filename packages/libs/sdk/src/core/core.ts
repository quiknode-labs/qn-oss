import { mainnet } from 'viem/chains';
import { createClient, http, type Client, publicActions } from 'viem';
import { type NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import { nftAndTokenActions } from './addOns/nftTokenV2/actions';
import {
  type QNCoreClientConfig,
  type CoreArguments,
  type QNCoreClient,
} from './coreTypes';
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

  // TODO: Determine endpoint chain from qn url
  constructor({ endpointUrl }: CoreArguments) {
    this.endpointUrl = endpointUrl;
    this.viem = viem;
  }
  createQNClient(config: QNCoreClientConfig): QNCoreClient {
    const qnClient = createClient({
      chain: mainnet,
      transport: http(this.endpointUrl),
    }).extend(publicActions);

    return qnClient.extend(buildQNActions(config));
  }
}
