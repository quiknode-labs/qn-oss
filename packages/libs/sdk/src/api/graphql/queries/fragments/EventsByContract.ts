import { gql } from '@urql/core';

import { TokenEventInfo } from './nodes/tokenEvent';
import { Pagination } from './pagination';

export const EventsByContract = gql`
  fragment EventsByContract on EVMSchemaType {
    contract(contractAddress: $contractAddress) {
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
  }
  ${TokenEventInfo}
  ${Pagination}
`;
