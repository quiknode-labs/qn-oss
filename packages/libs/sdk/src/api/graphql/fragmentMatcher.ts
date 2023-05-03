export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Collection: ['ERC721Collection', 'ERC1155Collection'],
    Contract: ['NFTContract', 'TokenContract'],
    NFT: ['ERC721NFT', 'ERC1155NFT'],
    TokenEvent: [
      'TokenBurnEvent',
      'TokenMintEvent',
      'TokenSaleEvent',
      'TokenSwapEvent',
      'TokenTransferEvent',
    ],
  },
};
export default result;
