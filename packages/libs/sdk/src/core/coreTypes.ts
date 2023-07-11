import { PublicClient } from 'viem';
import { NFTAndTokenActions } from './addOns/nftTokenV2/types/action';

export interface CoreArguments {
  endpointUrl: string;
  config?: QNCoreClientConfig;
}

export type QNCoreClientConfig = {
  addOns?: {
    nftTokenV2: boolean;
  };
};

export type QNCoreClient = PublicClient & NFTAndTokenActions;
