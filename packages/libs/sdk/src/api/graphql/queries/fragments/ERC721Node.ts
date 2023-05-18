import { gql } from '@apollo/client/core/index.js';

export const ERC721NFTNodeFragment = gql`
  fragment ERC721NFTNode on ERC721NFT {
    animationUrl
    attributes {
      name
      value
    }
    collectionSlug
    contractAddress
    description
    externalUrl
    metadata
    name
    tokenId
    wallet {
      address
      ensName
    }
  }
`;
