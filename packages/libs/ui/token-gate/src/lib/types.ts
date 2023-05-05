// NULL = no wallet connected
// AWAITING = wallet is connected but haven't signed the message yet
// SIGNED = wallet is connected and they signed the message, but haven't verified NFT status yet
// VERIFIED = wallet is connected and signed, and we verified that they own the NFT
// DENIED = wallet is connected and signed, and we verified that they don't own the NFT
export enum OWNERSHIP_STATUS {
  'NULL',
  'AWAITING',
  'VERIFIED',
  'SIGNED',
  'DENIED',
}

export enum WALLET_PROVIDERS {
  'METAMASK',
  'COINBASE',
  'WALLET_CONNECT',
}
