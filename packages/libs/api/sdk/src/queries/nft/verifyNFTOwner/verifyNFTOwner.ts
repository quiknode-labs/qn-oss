import { gql } from '@apollo/client/core';

export const verifyNFTOwnerRawQuery = gql`
  query Token($contractAddress: String!, $tokenId: String!) {
    token(contractAddress: $contractAddress, tokenId: $tokenId) {
      ... on ERC721Token {
        tokenId
        contract {
          ... on ERC721Contract {
            address
          }
        }
        owner {
          address
        }
      }
    }
  }
`;

export interface verifyNFTOwnerQueryVariables {
  contractAddress: string;
  tokenId: string;
}
