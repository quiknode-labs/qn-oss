import { gql } from '@apollo/client/core';
import { PaginationArgs } from '../../../types';

export const getWalletAddressNFTsRawQuery = gql`
  query WalletNFTs($address: String, $first: Int, $after: String) {
    wallet(address: $address) {
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

export interface WalletAddressNFTsQueryVariables extends PaginationArgs {
  address: string;
}
