import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const EthSepoliaVerifyOwnershipByAddress = gql`
  query EthSepoliaVerifyOwnershipByAddress(
    $address: String!
    $filter: WalletNFTsFilterInput
  ) {
    ethereumSepolia {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
