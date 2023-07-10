import { Client } from 'viem';
import { NFTAndTokenActions } from './addOns/nftTokenV2/types/action';

export interface CoreArguments {
  endpointUrl: string;
  network?: string;
  config?: QNCoreClientConfig;
}

export type QNCoreClientConfig = {
  addOns?: {
    nftTokenV2: boolean;
  };
};

export type QNCoreClient = Client & NFTAndTokenActions;
