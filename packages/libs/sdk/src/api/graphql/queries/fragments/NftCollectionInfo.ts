import { gql } from '@urql/core';

export const NftCollectionInfo = gql`
  fragment NftCollectionInfo on EVMSchemaType {
    collection(contractAddress: $contractAddress) {
      __typename
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
      ohlcvChart(filter: { limit: 1 }) {
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
  }
`;
