import { gql } from '@urql/core';

export const TokenBalanceNode = gql`
  fragment TokenBalanceNode on WalletTokenBalance {
    __typename
    totalBalance
    contract {
      address
      decimals
      name
      symbol
    }
  }
`;
