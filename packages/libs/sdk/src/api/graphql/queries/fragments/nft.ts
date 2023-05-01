import { gql } from '@apollo/client/core';

export const NftInfo = gql`
  fragment NftInfo on WalletNFT {
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
