import { gql } from '@urql/core';
import { TransactionsByHash } from '../../../fragments/getTransactionByHash';

export const EthMainnetTransactionsByHash = gql`
  query EthMainnetTransactionsByHash($hash: String!) {
    ethereum {
      ...TransactionsByHash
    }
  }
  ${TransactionsByHash}
`;
