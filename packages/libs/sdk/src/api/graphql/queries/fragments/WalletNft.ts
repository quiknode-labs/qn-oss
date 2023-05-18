import { gql } from '@apollo/client';

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
