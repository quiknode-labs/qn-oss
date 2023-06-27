import { gql } from '@apollo/client';
import { VerifyOwnershipNFTDetails } from './VerifyOwnershipNFTDetails';

export const VerifyOwnershipInfoByENS = gql`
  fragment VerifyOwnershipInfoByENS on EVMSchemaType {
    walletByENS(ensName: $ensName) {
      walletNFTs(filter: $filter) {
        edges {
          node {
            ...VerifyOwnershipNFTDetails
          }
        }
      }
    }
  }
  ${VerifyOwnershipNFTDetails}
`;
