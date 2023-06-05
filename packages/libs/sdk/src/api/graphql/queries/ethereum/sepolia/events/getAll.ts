import { gql } from '@urql/core';
import { EventsGetAll } from '../../../fragments/EventsGetAll';

export const EthereumSepoliaEventsGetAll = gql`
  query EthereumSepoliaEventsGetAll(
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    ethereumSepolia {
      ...EventsGetAll
    }
  }
  ${EventsGetAll}
`;
