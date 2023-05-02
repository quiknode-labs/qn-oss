import { gql } from '@apollo/client';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const PolygonMainnetNftCollectionDetails = gql`
query Query($contractAddress: String!, $filter: { limit: 1 }) {
  polygon {
    collection(contractAddress: $contractAddress) {
      ...NftCollectionInfo
    }
  }
  ${NftCollectionInfo}
}`;
