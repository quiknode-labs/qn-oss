import { LogType } from '../../../graphql/types';
import { PaginationArgs } from '../../../types';

export interface ContractEventLogQueryVariables extends PaginationArgs {
  address: string;
  types?: LogType[];
}
