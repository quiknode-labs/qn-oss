import {
  isEvmAddress,
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

export const verifyOwnershipByAddressValidator = z
  .object({
    address: isEvmAddress,
    contracts: z
      .array(
        z
          .object({
            contractAddress: isEvmAddress,
            tokenId: z.string().optional(),
          })
          .strict()
      )
      .nonempty(),
  })
  .merge(supportedChainInput)
  .strict();

// What the user can pass in the function
export type VerifyOwnershipInput = z.infer<
  typeof verifyOwnershipByAddressValidator
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
