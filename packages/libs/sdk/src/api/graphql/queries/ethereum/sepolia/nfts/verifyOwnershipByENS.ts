import { gql } from '@apollo/client/core';
import { VerifyOwnershipInfoByENS } from '../../../fragments/VerifyOwnershipInfoByENS';

export const EthSepoliaVerifyOwnershipByENS = gql`
  query EthSepoliaVerifyOwnershipByENS(
    $ensName: String!
    $filter: WalletNFTsFilterInput
  ) {
    ethereumSepolia {
      ...VerifyOwnershipInfoByENS
    }
  }
  ${VerifyOwnershipInfoByENS}
`;
