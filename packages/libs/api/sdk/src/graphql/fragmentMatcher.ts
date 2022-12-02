
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Collection": [
      "ERC721Collection",
      "ERC1155Collection"
    ],
    "Token": [
      "ERC721Token",
      "ERC1155Token"
    ],
    "TokenEvent": [
      "TokenBurnEvent",
      "TokenMintEvent",
      "TokenSaleEvent",
      "TokenSwapEvent",
      "TokenTransferEvent"
    ],
    "TrendingCollections": [
      "ERC721TrendingCollections",
      "ERC1155TrendingCollections"
    ]
  }
};
      export default result;
    