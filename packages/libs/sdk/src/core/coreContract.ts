// eslint-disable-next-line @nx/enforce-module-boundaries
import { PublicClient, getContract } from 'viem'
import type API from '../api';
import fetch from 'cross-fetch';
global.fetch = fetch;

interface CoreContractsArguments {
  apiClient: API;
  publicClient: PublicClient;
  address: `0x${string}`;
  abi?: any;
}

export class CoreContract {
  public contract: any; // TODO: type this
  readonly apiClient: API;
  readonly publicClient: PublicClient;
  readonly address: `0x${string}`;
  private abi: any;

  constructor({
    apiClient,
    publicClient,
    address,
    abi,
  }: CoreContractsArguments) {
    this.apiClient = apiClient;
    this.publicClient = publicClient;
    this.address = address;
    if (abi) this.abi = abi;
  }

  async setupContract() {
    if (!this.abi) {
      const details = await this.apiClient.contracts.getDetails({
        contractAddress: this.address,
      });
      const abi = details?.contract?.abi;
      if (!abi) {
        throw new Error('No abi found or provided for contract');
      }
      this.abi = abi;
    }
    const contract = getContract({
      address: this.address,
      abi: this.abi,
      publicClient: this.publicClient,
    });

    return contract;
  }
}
