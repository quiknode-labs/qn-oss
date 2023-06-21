import {
  contractTokensFilter,
  isEvmAddress,
  isENSAddress,
  supportedChainInput,
} from '../../../lib/validation/validators';
import {
  CodegenEthMainnetVerifyOwnershipByAddressQueryVariables,
  CodegenEthMainnetVerifyOwnershipByAddressQuery,
  CodegenVerifyOwnershipInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';
import { z } from 'zod';

export type VerifyOwnershipByAddressQueryType = {
  [k in ChainName]: CodegenEthMainnetVerifyOwnershipByAddressQuery['ethereum'];
};

// What the query takes as input
export type VerifyOwnershipByAddressQueryVariablesType =
  CodegenEthMainnetVerifyOwnershipByAddressQueryVariables;

export const verifyOwnershipValidator = z
  .object({
    address: z.union([isENSAddress, isEvmAddress]),
    nfts: contractTokensFilter,
  })
  .merge(supportedChainInput)
  .strict();

// What the user can pass in the function
export type VerifyOwnershipByAddressInput = z.infer<
  typeof verifyOwnershipValidator
>;

export interface VerifyOwnershipByAddressQueryResultInfo {
  walletByAddress: {
    walletNFTs: CodegenVerifyOwnershipInfoFragment[];
  };
}

// What the graphQL query returns after the edges and nodes are removed
export type VerifyOwnershipByAddressQueryResultFull = Record<
  ChainName,
  VerifyOwnershipByAddressQueryResultInfo
>;
