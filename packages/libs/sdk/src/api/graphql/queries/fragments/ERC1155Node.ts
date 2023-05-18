import { gql } from '@apollo/client/core/index.js';

export const ERC1155NFTNodeFragment = gql`
  fragment ERC1155NFTNode on ERC1155NFT {
    animationUrl
    collectionSlug
    contractAddress
    description
    externalUrl
    metadata
    name
    tokenId
    wallets {
      edges {
        node {
          address
          ensName
        }
      }
    }
  }
`;
