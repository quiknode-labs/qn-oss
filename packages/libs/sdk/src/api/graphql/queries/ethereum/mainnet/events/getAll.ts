import { gql } from '@urql/core';
import { EventsGetAll } from '../../../fragments/EventsGetAll';

export const EthereumMainnetEventsGetAll = gql`
  query EthereumMainnetEventsGetAll(
    $filter: TokenEventsFilterInput
    $before: String
    $after: String
    $first: Int
  ) {
    ethereum {
      ...EventsGetAll
    }
  }
  ${EventsGetAll}
`;
