import {
  contractTokensFilter,
  isENSAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetVerifyOwnershipByENSQueryVariables,
  CodegenEthMainnetVerifyOwnershipByENSQuery,
  CodegenVerifyOwnershipInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type VerifyOwnershipByENSQueryType = {
  [k in ChainName]: CodegenEthMainnetVerifyOwnershipByENSQuery['ethereum'];
};

// What the query takes as input
export type VerifyOwnershipByENSQueryVariablesType =
  CodegenEthMainnetVerifyOwnershipByENSQueryVariables;

export const verifyOwnershipByENSValidator = z
  .object({
    ensName: isENSAddress,
    nfts: contractTokensFilter,
  })
  .merge(supportedChainInput)
  .strict();

// What the user can pass in the function
export type VerifyOwnershipByENSInput = z.infer<
  typeof verifyOwnershipByENSValidator
>;

export interface VerifyOwnershipByENSQueryResultInfo {
  walletByENS: {
    walletNFTs: CodegenVerifyOwnershipInfoFragment[];
  };
}

// What the graphQL query returns after the edges and nodes are removed
export type VerifyOwnershipByENSQueryResultFull = Record<
  ChainName,
  VerifyOwnershipByENSQueryResultInfo
>;
