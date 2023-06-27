import { gql } from '@apollo/client';
import { VerifyOwnershipNFTDetails } from './VerifyOwnershipNFTDetails';

export const VerifyOwnershipInfo = gql`
  fragment VerifyOwnershipInfo on EVMSchemaType {
    walletByAddress(address: $address) {
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
