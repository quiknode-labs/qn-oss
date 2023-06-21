import { gql } from '@urql/core';

export const NftDetails = gql`
  fragment NftDetails on EVMSchemaType {
    nft(contractAddress: $contractAddress, tokenId: $tokenId) {
      __typename
      animationUrl
      collectionSlug
      contractAddress
      description
      externalUrl
      metadata
      name
      tokenId
      ... on ERC1155NFT {
        wallets {
          edges {
            node {
              __typename
              address
              ensName
            }
          }
        }
      }
      ... on ERC721NFT {
        wallet {
          __typename
          address
          ensName
        }
      }
    }
  }
`;
