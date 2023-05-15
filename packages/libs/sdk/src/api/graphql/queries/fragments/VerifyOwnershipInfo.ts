import { gql } from '@apollo/client';
import { VerifyOwnershipNFTDetails } from './VerifyOwnershipNFTDetails';

export const VerifyOwnershipInfo = gql`
  fragment VerifyOwnershipInfo on EVMSchemaType {
    walletByAddress(address: $address) {
      walletNFTs(filter: { contractAddressIn: $contractAddresses }) {
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
