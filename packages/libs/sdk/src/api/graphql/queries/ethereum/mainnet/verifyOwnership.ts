import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../fragments/VerifyOwnershipInfo';

export const EthMainnetVerifyOwnership = gql`
  query EthMainnetVerifyOwnership(
    $address: String!
    $contractAddresses: [String!]!
  ) {
    ethereum {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
