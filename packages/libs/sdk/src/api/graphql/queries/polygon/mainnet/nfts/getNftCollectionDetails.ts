import { gql } from '@urql/core';
import { NftCollectionInfo } from '../../../fragments/NftCollectionInfo';

export const PolygonMainnetNftCollectionDetails = gql`
query PolygonMainnetNftCollectionDetails($contractAddress: String!) {
  polygon {
    ...NftCollectionInfo
  }
  ${NftCollectionInfo}
}
`;
