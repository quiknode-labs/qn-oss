import { gql } from '@apollo/client/core'; // Using core to not pull in react hooks

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
