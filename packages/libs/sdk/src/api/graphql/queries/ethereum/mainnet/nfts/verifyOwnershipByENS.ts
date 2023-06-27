import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfoByENS } from '../../../fragments/VerifyOwnershipInfoByENS';

export const EthMainnetVerifyOwnershipByENS = gql`
  query EthMainnetVerifyOwnershipByENS(
    $ensName: String!
    $filter: WalletNFTsFilterInput
  ) {
    ethereum {
      ...VerifyOwnershipInfoByENS
    }
  }
  ${VerifyOwnershipInfoByENS}
`;
