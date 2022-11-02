import { PaginationArgs } from '../../../types';

export interface NFTsByWalletAndContractsVariables extends PaginationArgs {
  address: string;
  contracts: string[];
}
