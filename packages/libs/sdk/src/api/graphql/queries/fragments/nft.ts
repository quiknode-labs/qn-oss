import { gql } from '@apollo/client';

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
