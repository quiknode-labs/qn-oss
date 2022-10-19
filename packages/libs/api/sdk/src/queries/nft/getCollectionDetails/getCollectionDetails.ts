import { gql } from '@apollo/client/core';

export const getCollectionDetailsRawQuery = gql`
  query CollectionDetails($address: String!) {
    contract(address: $address) {
      ... on ERC721Contract {
        address
        isVerified
        tokenStandard
        attributes {
          name
          rarity
          value
          valueCount
        }
        circulatingSupply
        name
        stats {
          average
          ceiling
          floor
          totalSales
          volume
        }
        symbol
      }
    }
  }
`;

export interface CollectionDetailsQueryVariables {
  address: string;
}
