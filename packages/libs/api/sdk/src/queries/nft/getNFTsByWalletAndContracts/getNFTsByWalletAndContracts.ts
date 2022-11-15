import { PaginationArgs } from '../sharedTypes';

export interface NFTsByWalletAndContractsVariables extends PaginationArgs {
  address: string;
  contracts: string[];
}
