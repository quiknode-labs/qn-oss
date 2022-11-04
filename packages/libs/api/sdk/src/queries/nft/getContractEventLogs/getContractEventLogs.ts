import { ContractEventLogFragment, PageInfo } from '../../../graphql/types';

export interface ContractEventLogsQueryResponse {
  contract: {
    logsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
    logs: ContractEventLogFragment;
  };
}
