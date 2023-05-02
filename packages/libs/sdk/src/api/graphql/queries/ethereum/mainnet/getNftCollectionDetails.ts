import { gql } from '@apollo/client';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const EthMainnetNftCollectionDetails = gql`
query Query($contractAddress: String!, $filter: { limit: 1 }) {
  ethereum {
    collection(contractAddress: $contractAddress) {
      ...NftCollectionInfo
    }
  }
  ${NftCollectionInfo}
}`;
