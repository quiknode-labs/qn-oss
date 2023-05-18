import { gql } from '@apollo/client';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const PolygonMainnetNftCollectionDetails = gql`
query PolygonMainnetNftCollectionDetails($contractAddress: String!) {
  polygon {
    ...NftCollectionInfo
  }
  ${NftCollectionInfo}
}
`;
