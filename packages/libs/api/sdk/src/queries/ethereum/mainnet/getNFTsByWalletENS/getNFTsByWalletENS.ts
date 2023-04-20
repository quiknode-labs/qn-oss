import { gql } from "@apollo/client"

export const EthMainnetWalletNFTsByEns = gql`
  query EthMainnetWalletNFTsByEns($ensName: String!, $after: String, $first: Int) {
    ethereum {
      ...WalletByEnsFragment
    }
  }
`
