import { gql } from '@apollo/client/core/index.js';
import { NftCollectionInfo } from '../../fragments/NftCollectionInfo';

export const EthMainnetNftCollectionDetails = gql`
  query EthMainnetNftCollectionDetails($contractAddress: String!) {
    ethereum {
      ...NftCollectionInfo
    }
  }
  ${NftCollectionInfo}
`;
