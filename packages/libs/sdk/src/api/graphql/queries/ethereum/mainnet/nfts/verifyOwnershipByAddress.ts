import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const EthMainnetVerifyOwnershipByAddress = gql`
  query EthMainnetVerifyOwnershipByAddress(
    $address: String!
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
