import { gql } from '@apollo/client/core/index.js';

import { TokenEventInfo } from './tokenEvent';
import { Pagination } from './pagination';

export const NftEventsFragment = gql`
  fragment NftEventsFragment on EVMSchemaType {
    nft(contractAddress: $contractAddress, tokenId: $tokenId) {
      contractAddress # using as key field for apollo caching
      tokenId # using as key field for apollo caching
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
