import { gql } from '@apollo/client';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const EthSepoliaNftCollectionDetails = gql`
query Query($contractAddress: String!, $filter: { limit: 1 }) {
  ethereumSepolia {
    collection(contractAddress: $contractAddress) {
      ...NftCollectionInfo
    }
  }
  ${NftCollectionInfo}
}`;
