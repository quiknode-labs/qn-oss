import { LogType } from '../../../graphql/types';
import { PaginationArgs } from '../../../types';

export interface EventLogsQueryVariables extends PaginationArgs {
  address: string;
  tokenId: string;
  types?: LogType[];
}
