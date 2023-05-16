import { gql } from '@apollo/client/core';

import { Pagination } from './pagination';
import { ERC1155NFTNodeFragment } from './ERC1155Node';
import { ERC721NFTNodeFragment } from './ERC721Node';

export const NftsByContractAddressFragment = gql`
  fragment NftsByContractAddressFragment on EVMSchemaType {
    collection(contractAddress: $contractAddress) {
      address # key field
      __typename
      ... on ERC1155Collection {
        nfts(first: $first, after: $after) {
          pageInfo {
            ...Pagination
          }
          edges {
            node {
              ...ERC1155NFTNode
            }
          }
        }
      }
      ... on ERC721Collection {
        nfts(first: $first, after: $after) {
          pageInfo {
            ...Pagination
          }
          edges {
            node {
              ...ERC721NFTNode
            }
          }
        }
      }
    }
  }
  ${ERC1155NFTNodeFragment}
  ${ERC721NFTNodeFragment}
  ${Pagination}
`;
