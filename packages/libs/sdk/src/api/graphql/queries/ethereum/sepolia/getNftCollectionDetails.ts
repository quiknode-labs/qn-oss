import { gql } from '@urql/core';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const EthSepoliaNftCollectionDetails = gql`
query EthSepoliaNftCollectionDetails($contractAddress: String!) {
  ethereumSepolia {
      ...NftCollectionInfo
  }
  ${NftCollectionInfo}
}
`;
