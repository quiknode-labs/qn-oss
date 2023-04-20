import { gql } from '@apollo/client/core';

export const getWalletENSNFTsRawQuery = (network: string) => gql`
  query EthMainnetWalletNFTsByEns($ensName: String!, $after: String, $first: Int) {
    "${network}" {
      ...WalletByEnsFragment
    }
  }
`
