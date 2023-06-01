import { gql } from '@urql/core';

import { TokenEventInfo } from './nodes/tokenEvent';
import { Pagination } from './pagination';

export const CollectionEventsFragment = gql`
  fragment CollectionEventsFragment on EVMSchemaType {
    collection(contractAddress: $contractAddress) {
      address # using as key field for apollo caching
      tokenEvents(filter: $filter, after: $after, first: $first) {
        pageInfo {
          ...Pagination
        }
        edges {
          node {
            ...TokenEventInfo
          }
        }
      }
    }
  }
  ${TokenEventInfo}
  ${Pagination}
`;
