import {
  CodegenEthMainnetVerifyOwnershipQueryVariables,
  CodegenEthMainnetVerifyOwnershipQuery,
  CodegenVerifyOwnershipInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type VerifyOwnershipQueryType = {
  [k in ChainName]: CodegenEthMainnetVerifyOwnershipQuery['ethereum'];
};

export type VerifyOwnershipQueryVariablesType =
  CodegenEthMainnetVerifyOwnershipQueryVariables;

export interface VerifyOwnershipQueryResultInfo {
  verifyOwnership: CodegenVerifyOwnershipInfoFragment;
}

// What the graphQL query returns after the edges and nodes are removed
export type VerifyOwnershipQueryResultFull = Record<
  ChainName,
  VerifyOwnershipQueryResultInfo
>;
