import { gql } from '@apollo/client/core';

export const TrendingCollectionInfo = gql`
  fragment TrendingCollectionInfo on Collection {
    address
    baseTokenUri
    circulatingSupply
    description
    externalUrl
    image {
      height
      mimeType
      url
      width
    }
    name
    openseaMetadata {
      isHidden
      isVerified
      unsafeSlug
    }
    symbol
    totalSupply
    twitterUsername
  }
`;
