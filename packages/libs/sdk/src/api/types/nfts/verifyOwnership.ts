import {
  CodegenEthMainnetVerifyOwnershipQueryVariables,
  CodegenEthMainnetVerifyOwnershipQuery,
  CodegenVerifyOwnershipInfoFragment,
} from '../../graphql/generatedTypes';
import { ChainName } from '../chains';

export type VerifyOwnershipQueryType = {
  [k in ChainName]: CodegenEthMainnetVerifyOwnershipQuery['ethereum'];
};

// What the query takes as input
export type VerifyOwnershipQueryVariablesType =
  CodegenEthMainnetVerifyOwnershipQueryVariables;

// What the user can pass in the
export type VerifyOwnershipUserVariablesType = {
  walletAddress: string;
  contractAddresses: string[];
};

export interface VerifyOwnershipQueryResultInfo {
  walletByAddress: {
    walletNFTs: CodegenVerifyOwnershipInfoFragment[];
  };
}

// What the graphQL query returns after the edges and nodes are removed
export type VerifyOwnershipQueryResultFull = Record<
  ChainName,
  VerifyOwnershipQueryResultInfo
>;
