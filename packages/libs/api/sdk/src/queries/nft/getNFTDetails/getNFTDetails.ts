import { gql } from '@apollo/client/core';

export const getNFTDetailsRawQuery = gql`
  query Token($contractAddress: String!, $tokenId: String!) {
    token(contractAddress: $contractAddress, tokenId: $tokenId) {
      ... on ERC721Token {
        tokenId
        attributes {
          name
          value
        }
        contract {
          address
          isVerified
          tokenStandard
          ... on ERC721Contract {
            name
          }
        }
        images {
          height
          mimeType
          url
          width
        }
        name
        symbol
        metadata {
          animation_url
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
        }
      }
    }
  }
`;

export interface NFTDetailsQueryVariables {
  contractAddress: string;
  tokenId: string;
}
