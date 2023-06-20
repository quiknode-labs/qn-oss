import { gql } from '@urql/core';

export const NftDetails = gql`
  fragment NftDetails on EVMSchemaType {
    nft(contractAddress: $contractAddress, tokenId: $tokenId) {
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
              address
              ensName
            }
          }
        }
      }
      ... on ERC721NFT {
        wallet {
          address
          ensName
        }
      }
    }
  }
`;
