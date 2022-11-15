import { gql } from '@apollo/client/core';
import { PaginationArgs } from '../sharedTypes';

export const getWalletENSNFTsRawQuery = gql`
  query WalletNFTs($ensName: String, $first: Int, $after: String) {
    wallet(ensName: $ensName) {
      ensName
      address
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
                address
                ... on ERC721Contract {
                  symbol
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface WalletENSNFTsQueryVariables extends PaginationArgs {
  ensName: string;
}
