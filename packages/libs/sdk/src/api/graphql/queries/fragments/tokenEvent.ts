import { gql } from '@apollo/client/core/index.js';

export const TokenEventInfo = gql`
  fragment TokenEventInfo on TokenEvent {
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
