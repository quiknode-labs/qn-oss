import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../fragments/VerifyOwnershipInfo';

export const EthSepoliaVerifyOwnership = gql`
  query EthSepoliaVerifyOwnership(
    $address: String!
    $contractAddresses: [String!]!
  ) {
    ethereumSepolia {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
