import { SimplifyType } from '../../../../../src/api/utils/helpers';
import { RpcSchemaOverride } from 'viem';
import {
  QNFetchNFTInput,
  QNFetchNFTsResponse,
  QNFetchNFTMethod,
} from './qn_fetchNFTs';
import {
  QNFetchNFTCollectionDetailsMethod,
  QNFetchNFTCollectionDetailsInput,
  QNFetchNFTCollectionDetailsResponse,
} from './qn_fetchNFTCollectionDetails';

export type NFTAndTokenMethods = [
  QNFetchNFTMethod,
  QNFetchNFTCollectionDetailsMethod
];
export type NFTAndTokenSchema = RpcSchemaOverride & NFTAndTokenMethods;

export type NFTAndTokenActions = {
  /**
   * Returns aggregated data on NFTs for a given wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_fetchNFTs_v2
   *
   * @param args - {@link QNFetchNFTInput}
   * @returns response - {@link QNFetchNFTsResponse}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = await core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_fetchNFTs({
   *   wallet: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6",
   *   contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
   * });
   */
  qn_fetchNFTs: (
    args: SimplifyType<QNFetchNFTInput>
  ) => Promise<SimplifyType<QNFetchNFTsResponse>>;
  /**
   * Returns aggregated data on NFTs for a given wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_fetchNFTCollectionDetails_v2
   *
   * @param args - {@link QNFetchNFTCollectionDetailsInput}
   * @returns response - {@link QNFetchNFTCollectionDetailsResponse}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = await core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await core.qn_fetchNFTCollectionDetails({
   *   contracts: [
   *     "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
   *     "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
   *   ]
   * });
   */

  qn_fetchNFTCollectionDetails: (
    args: SimplifyType<QNFetchNFTCollectionDetailsInput>
  ) => Promise<SimplifyType<QNFetchNFTCollectionDetailsResponse>>;
};
