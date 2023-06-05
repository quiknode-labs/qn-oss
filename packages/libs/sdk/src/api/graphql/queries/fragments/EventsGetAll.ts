import { gql } from '@urql/core';

import { TokenEventInfo } from './nodes/tokenEvent';
import { Pagination } from './pagination';

export const EventsGetAll = gql`
  fragment EventsGetAll on EVMSchemaType {
    tokenEvents(filter: $filter, first: $first, after: $after) {
      edges {
        node {
          ...TokenEventInfo
        }
      }
      pageInfo {
        ...Pagination
      }
    }
  }
  ${TokenEventInfo}
  ${Pagination}
`;
