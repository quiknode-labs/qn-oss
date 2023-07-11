import { Abi, PublicClient } from 'viem';
import { NFTAndTokenActions } from './addOns/nftTokenV2/types/action';
import type API from '../api';

export interface CoreArguments {
  endpointUrl: string;
  config?: QNCoreClientConfig;
}

export type QNCoreClientConfig = {
  addOns?: {
    nftTokenV2: boolean;
  };
};

export type CoreContractsArguments = {
  apiClient?: API;
  address: `0x${string}`;
  abi?: Abi;
};

export type QNCoreClient = PublicClient & NFTAndTokenActions;
