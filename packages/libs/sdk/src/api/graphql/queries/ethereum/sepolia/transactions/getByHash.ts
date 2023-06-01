import { gql } from '@urql/core';
import { TransactionsByHash } from '../../../fragments/getTransactionByHash';

export const EthSepoliaTransactionsByHash = gql`
  query EthSepoliaTransactionsByHash($hash: String!) {
    ethereumSepolia {
      ...TransactionsByHash
    }
  }
  ${TransactionsByHash}
`;
