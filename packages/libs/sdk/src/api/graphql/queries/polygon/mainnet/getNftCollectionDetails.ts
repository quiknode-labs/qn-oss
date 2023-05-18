import { gql } from '@apollo/client/core/index.js';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const PolygonMainnetNftCollectionDetails = gql`
query PolygonMainnetNftCollectionDetails($contractAddress: String!) {
  polygon {
    ...NftCollectionInfo
  }
  ${NftCollectionInfo}
}
`;
