import { gql } from '@urql/core';

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
