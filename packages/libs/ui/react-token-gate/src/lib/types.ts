// NULL = no wallet connected
// AWAITING = wallet is connected, but waiting on signature
// VERIFIED = they own the NFT
// DENIED = they don't own the NFT
export enum OWNERSHIP_STATUS {
  'NULL',
  'AWAITING',
  'VERIFIED',
  'DENIED',
}
