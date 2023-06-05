import { gql } from '@urql/core';
import { EventsGetAll } from '../../../fragments/EventsGetAll';

export const PolygonMainnetEventsGetAll = gql`
  query PolygonMainnetEventsGetAll(
    $filter: TokenEventsFilterInput
    $after: String
    $first: Int
  ) {
    polygon {
      ...EventsGetAll
    }
  }
  ${EventsGetAll}
`;
