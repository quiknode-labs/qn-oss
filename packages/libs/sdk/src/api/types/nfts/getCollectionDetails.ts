import { isEvmAddress, supportedChainInput } from 'lib/validation/validators';
import {
  CodegenEthMainnetNftCollectionDetailsQuery,
  CodegenEthMainnetNftCollectionDetailsQueryVariables,
  CodegenNftCollectionInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type NftCollectionDetailsQuery = {
  [k in ChainName]: CodegenEthMainnetNftCollectionDetailsQuery['ethereum'];
};

export type NftCollectionDetailsQueryVariables =
  CodegenEthMainnetNftCollectionDetailsQueryVariables;

export const nftCollectionDetailsValidator = z
  .object({
    contractAddress: isEvmAddress,
  })
  .merge(supportedChainInput)
  .strict();

export type NftCollectionDetailsInput = z.infer<
  typeof nftCollectionDetailsValidator
>;
export interface NftCollectionDetailsQueryResultInfo {
  collection: CodegenNftCollectionInfoFragment['collection'];
}

// What the graphQL query returns after the edges and nodes are removed
export type NftCollectionDetailsQueryResultFull = Record<
  ChainName,
  NftCollectionDetailsQueryResultInfo
>;

// What we actually return to the user
export type NftCollectionDetailsResult = {
  collection: CodegenNftCollectionInfoFragment['collection'];
};
