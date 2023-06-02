import { gql } from '@urql/core';
import { TransactionsByHash } from '../../../fragments/getTransactionByHash';

export const PolygonMainnetTransactionsByHash = gql`
  query PolygonMainnetTransactionsByHash($hash: String!) {
    polygon {
      ...TransactionsByHash
    }
  }
  ${TransactionsByHash}
`;
