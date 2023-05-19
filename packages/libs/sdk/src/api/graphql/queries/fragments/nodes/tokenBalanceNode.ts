import { gql } from '@apollo/client/core';

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
