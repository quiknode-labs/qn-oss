// eslint-disable-next-line @nx/enforce-module-boundaries
import { PublicClient, getContract } from 'viem';
import type API from '../api';

export class CoreContract {
  public contract: any; // TODO: type this
  readonly apiClient: API | null | undefined;
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
}
