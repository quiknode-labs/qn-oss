export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Contract: ['BaseContract', 'ERC721Contract'],
    Log: ['BaseLog', 'MintLog', 'OrderLog', 'TransferLog'],
    Token: ['BaseToken', 'ERC721Token'],
  },
};
export default result;
