import { gql } from '@apollo/client/core';

import { TokenEventInfo } from './tokenEvent';
import { Pagination } from './pagination';

export const CollectionEventsFragment = gql`
  fragment CollectionEventsFragment on EVMSchemaType {
    collection(contractAddress: $contractAddress) {
      address # key field
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
