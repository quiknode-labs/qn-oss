import { gql } from '@urql/core';

export const TokenEventInfo = gql`
  fragment TokenEventInfo on TokenEvent {
    __typename
    blockNumber
    fromAddress
    timestamp
    toAddress
    transactionHash
    transferIndex
    type
    ... on TokenBurnEvent {
      tokenId
      tokenQuantity
    }
    ... on TokenTransferEvent {
      tokenId
      contractAddress
      tokenQuantity
    }
    ... on TokenMintEvent {
      tokenQuantity
    }
    ... on TokenSaleEvent {
      marketplace
      receivedTokenContractAddress
      receivedTokenId
      sentTokenId
    }
  }
`;
