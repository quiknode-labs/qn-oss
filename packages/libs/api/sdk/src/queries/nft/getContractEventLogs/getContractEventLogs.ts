import {
  ContractEventLogFragment,
  ContractEventsLogsQuery,
  PageInfo,
} from '../../../graphql/types';

export interface ContractEventLogsQueryResponse {
  contract: ContractEventsLogsQuery['contract'] & {
    logsPageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
    logs: Omit<ContractEventLogFragment, '__typename'>[];
  };
}
