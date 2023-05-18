import { gql } from '@apollo/client';

import { TokenEventInfo } from './tokenEvent';
import { Pagination } from './pagination';

export const CollectionEventsFragment = gql`
  fragment CollectionEventsFragment on EVMSchemaType {
    collection(contractAddress: $contractAddress) {
      address # using as key field for apollo caching
      tokenEvents(after: $after, first: $first) {
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
