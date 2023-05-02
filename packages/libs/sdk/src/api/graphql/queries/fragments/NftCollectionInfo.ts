import { gql } from '@apollo/client';

export const NftCollectionInfo = gql`
  fragment NftCollectionInfo on Collection {
    address
    bannerImage {
      height
      mimeType
      url
      width
    }
    baseTokenUri
    circulatingSupply
    contract {
      address
      isVerified
      name
      symbol
      supportedErcInterfaces
    }
    description
    externalUrl
    image {
      height
      mimeType
      url
      width
    }
    name
    ohlcvChart(filter: $filter) {
      average
      close
      count
      high
      low
      open
      volume
      timestamp
    }
    openseaMetadata {
      isHidden
      isVerified
      unsafeSlug
    }
    slug
    symbol
    totalSupply
    twitterUsername
  }
`;
