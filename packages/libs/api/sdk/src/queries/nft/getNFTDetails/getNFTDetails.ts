import { gql } from '@apollo/client/core';

export const getNFTDetailsRawQuery = gql`
  query Token(
    $contractAddress: String!
    $tokenId: String!
    $includeImages: Boolean! = true
    $includeAttributes: Boolean! = true
    $includeMetadata: Boolean! = true
  ) {
    token(contractAddress: $contractAddress, tokenId: $tokenId) {
      ... on ERC721Token {
        tokenId
        attributes @include(if: $includeAttributes) {
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
        images @include(if: $includeImages) {
          height
          mimeType
          url
          width
        }
        name
        symbol
        metadata @include(if: $includeMetadata) {
          animation_url
          background_color
          description
          external_url
          image
          image_data
          name
          youtube_url
          attributes {
            display_type
            trait_type
            value
          }
        }
      }
    }
  }
`;

export interface NFTDetailsQueryVariables {
  contractAddress: string;
  tokenId: string;
  includeImages?: boolean;
  includeAttributes?: boolean;
  includeMetadata?: boolean;
}
