import { PublicClient } from 'viem';
import { NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import { Chain } from 'viem';

export interface CoreArguments {
  endpointUrl: string;
  chain?: Chain;
  config?: QNCoreClientConfig;
}

export type QNCoreClientConfig = {
  addOns?: {
    nftTokenV2: boolean;
  };
};

export type QNCoreClient = PublicClient & NFTAndTokenActions;
