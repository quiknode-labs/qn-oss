import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const EthSepoliaVerifyOwnership = gql`
  query EthSepoliaVerifyOwnership($filter: WalletNFTsFilterInput) {
    ethereumSepolia {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
