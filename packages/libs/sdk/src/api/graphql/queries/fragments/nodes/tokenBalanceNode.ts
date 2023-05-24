import { gql } from '@urql/core';

export const TokenBalanceNode = gql`
  fragment TokenBalanceNode on WalletTokenBalance {
    totalBalance
    contract {
      address
      decimals
      name
      symbol
    }
  }
`;
