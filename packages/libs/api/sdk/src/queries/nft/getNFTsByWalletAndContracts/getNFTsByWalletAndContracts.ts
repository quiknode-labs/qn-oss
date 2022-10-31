import { gql } from '@apollo/client/core';
import { PaginationArgs } from '../../../types';

export const getNFTsWalletAndContractsRawQuery = gql`
  query NFTsWalletAndContract(
    $filter: TokensFilterInputType
    $address: String
    $first: Int
    $after: String
  ) {
    wallet(address: $address) {
      ensName
      address
      tokens(filter: $filter, first: $first, after: $after) {
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

export interface NFTWalletAndContractQueryVariables extends PaginationArgs {
  address: string;
  contracts: string[];
}