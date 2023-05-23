import { gql } from '@urql/core';

export const TransactionsNode = gql`
  fragment TransactionsNode on Transaction {
    blockNumber;
    blockTimestamp;
    contractAddress;
    fromAddress;
    cumulativeGasUsed;
    effectiveGasPrice;
    gas;
    gasPrice;
    gasUsed;
    hash;
    maxFeePerGas;
    maxPriorityFeePerGas;
    toAddress;
    type;
    input;
    transactionIndex;
    value;
  }
`;
