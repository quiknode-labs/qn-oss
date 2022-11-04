import { gql } from '@apollo/client/core';
import { PaginationArgs } from '../sharedTypes';

export const getContractAddressNFTsRawQuery = gql`
  query ContractNFTs($address: String!, $first: Int, $after: String) {
    contract(address: $address) {
      address
      isVerified
      tokenStandard
      tokens(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            tokenId
            images {
              url
            }
            ... on ERC721Token {
              contract {
                address # Included key field for caching
              }
            }
          }
        }
      }
      ... on ERC721Contract {
        circulatingSupply
        name
        symbol
      }
    }
  }
`;

export interface ContractAddressNFTsQueryVariables extends PaginationArgs {
  address: string;
}
