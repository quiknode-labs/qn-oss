import { gql } from '@urql/core';
import { TransactionsByWalletAddress } from '../../../fragments/transactionsByWalletAddress';

export const EthMainnetTransactionsByWalletAddress = gql`
  query EthMainnetTransactionsByWalletAddress(
    $address: String!
    $first: Int
    $after: String
  ) {
    ethereum {
      ...TransactionsByWalletAddress
    }
  }
  ${TransactionsByWalletAddress}
`;
