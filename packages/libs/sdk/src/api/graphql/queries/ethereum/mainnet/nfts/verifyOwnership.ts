import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfo } from '../../../fragments/VerifyOwnershipInfo';

export const EthMainnetVerifyOwnership = gql`
  query EthMainnetVerifyOwnership($filter: WalletNFTsFilterInput) {
    ethereum {
      ...VerifyOwnershipInfo
    }
  }
  ${VerifyOwnershipInfo}
`;
