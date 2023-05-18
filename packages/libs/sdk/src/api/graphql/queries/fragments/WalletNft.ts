import { gql } from '@apollo/client/core/index.js';

export const WalletNFTNode = gql`
  fragment WalletNFTNode on WalletNFT {
    nft {
      animationUrl
      collectionSlug
      contractAddress
      description
      externalUrl
      metadata
      name
      tokenId
    }
  }
`;
