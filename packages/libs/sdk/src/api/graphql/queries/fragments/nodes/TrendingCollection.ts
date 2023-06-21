import { gql } from '@urql/core';

export const TrendingCollectionInfo = gql`
  fragment TrendingCollectionInfo on Collection {
    __typename
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
