import { gql } from '@apollo/client/core';
import { PaginationArgs } from '../../../types';

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
