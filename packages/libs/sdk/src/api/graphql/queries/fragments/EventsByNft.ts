import { gql } from '@urql/core';

import { TokenEventInfo } from './nodes/tokenEvent';
import { Pagination } from './pagination';

export const NftEventsFragment = gql`
  fragment NftEventsFragment on EVMSchemaType {
    nft(contractAddress: $contractAddress, tokenId: $tokenId) {
      __typename
      contractAddress # using as key field for apollo caching
      tokenId # using as key field for apollo caching
      tokenEvents(
        filter: $filter
        before: $before
        after: $after
        first: $first
      ) {
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
