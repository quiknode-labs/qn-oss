import { SimplifyType } from '../../../../../src/api/utils/helpers';
import { RpcSchemaOverride } from 'viem';
import {
  QNFetchNFTMethod,
  QNFetchNFTInput,
  QNFetchNFTsResponse,
} from './qn_fetchNFTs';
import {
  QNFetchNFTCollectionDetailsMethod,
  QNFetchNFTCollectionDetailsInput,
  QNFetchNFTCollectionDetailsResponse,
} from './qn_fetchNFTCollectionDetails';
import {
  QNFetchNFTsByCollectionMethod,
  QNFetchNFTsByCollectionInput,
  QNFetchNFTsByCollectionResult,
} from './qn_fetchNFTsByCollection';
import {
  QNGetTransfersByNFTMethod,
  QNGetTransfersByNFTInput,
  QNGetTransfersByNFTResult,
} from './qn_getTransfersByNFT';
import {
  QNVerifyNFTsByOwnerMethod,
  QNVerifyNFTsOwnerInput,
  QNVerifyNFTsOwnerResult,
} from './qn_verifyNFTsOwner';
import {
  QNGetTokenMetadataByCAMethod,
  QNGetTokenMetadataByCAInput,
  QNGetTokenMetadataByCAResult,
} from './qn_getTokenMetadataByContractAddress';
import {
  QNGetTokenMetadataBySymbolMethod,
  QNGetTokenMetadataBySymbolInput,
  QNGetTokenMetadataBySymbolResult,
} from './qn_getTokenMetadataBySymbol';

export type NFTAndTokenMethods = [
  QNFetchNFTMethod,
  QNFetchNFTCollectionDetailsMethod,
  QNFetchNFTsByCollectionMethod,
  QNGetTransfersByNFTMethod,
  QNVerifyNFTsByOwnerMethod,
  QNGetTokenMetadataByCAMethod,
  QNGetTokenMetadataBySymbolMethod
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
   * const client = core.createQNClient({
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
   * const client = core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_fetchNFTCollectionDetails({
   *   contracts: [
   *     "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
   *     "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
   *   ]
   * });
   */

  qn_fetchNFTCollectionDetails: (
    args: SimplifyType<QNFetchNFTCollectionDetailsInput>
  ) => Promise<SimplifyType<QNFetchNFTCollectionDetailsResponse>>;
  /**
   * Returns aggregated data on NFTs within a given collection.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_fetchNFTsByCollection_v2
   *
   * @param args - {@link QNFetchNFTsByCollectionInput}
   * @returns response - {@link QNFetchNFTsByCollectionResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_fetchNFTsByCollection({
   *   collection: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
   * })
   */
  qn_fetchNFTsByCollection: (
    args: SimplifyType<QNFetchNFTsByCollectionInput>
  ) => Promise<SimplifyType<QNFetchNFTsByCollectionResult>>;
  /**
  * Returns transfers by given NFT.
  *
  * - Docs: https://www.quicknode.com/docs/ethereum/qn_getTransfersByNFT_v2
  *
  * @param args - {@link QNGetTransfersByNFTInput}
  * @returns response - {@link QNGetTransfersByNFTResult}
  *
  * @example
  * const core = new QuickNode.Core({
  *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
  * }
  *
  * const client = core.createQNClient({
  *   addOns: { nftTokenV2: true }
  * });
  *
  * const response = await client.qn_getTransfersByNFT({
  *   collection: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
7 *   collectionTokenId: "1",
  * })
  */
  qn_getTransfersByNFT: (
    args: SimplifyType<QNGetTransfersByNFTInput>
  ) => Promise<SimplifyType<QNGetTransfersByNFTResult>>;
  /**
   * Confirms ownership of specified NFTs for a given wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_verifyNFTsOwner_v2
   *
   * @param args - {@link QNVerifyNFTsOwnerInput}
   * @returns response - {@link QNVerifyNFTsOwnerResult}
   *
   * @example
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_verifyNFTsOwner({
   *  wallet: "0x91b51c173a4bdaa1a60e234fc3f705a16d228740",
   *  contracts: [
   *    "0x2106c00ac7da0a3430ae667879139e832307aeaa:3643",
   *    "0xd07dc4262bcdbf85190c01c996b4c06a461d2430:133803",
   *   ],
   * })
   *
   */
  qn_verifyNFTsOwner: (
    args: SimplifyType<QNVerifyNFTsOwnerInput>
  ) => Promise<SimplifyType<QNVerifyNFTsOwnerResult>>;

  /**
   * Returns token details for specified contract.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_getTokenMetadataByContractAddress_v2
   *
   * @param args - {@link QNGetTokenMetadataByCAInput}
   * @returns response - {@link QNGetTokenMetadataByCAResult}
   *
   * @example
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_getTokenMetadataByContractAddress({
   *   contract: "0x2106c00ac7da0a3430ae667879139e832307aeaa",
   * })
   */
  qn_getTokenMetadataByContractAddress: (
    args: SimplifyType<QNGetTokenMetadataByCAInput>
  ) => Promise<SimplifyType<QNGetTokenMetadataByCAResult | null>>;
  /**
   * Returns token details for specified token symbol.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_getTokenMetadataBySymbol_v2
   *
   * @param args - {@link QNGetTokenMetadataBySymbolInput}
   * @returns response - {@link QNGetTokenMetadataBySymbolResult}
   *
   * @example
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234/,
   * }
   *
   * const client = core.createQNClient({
   *   addOns: { nftTokenV2: true }
   * });
   *
   * const response = await client.qn_getTokenMetadataBySymbol({
   *   symbol: "DAI",
   * })
   */
  qn_getTokenMetadataBySymbol: (
    args: SimplifyType<QNGetTokenMetadataBySymbolInput>
  ) => Promise<SimplifyType<QNGetTokenMetadataBySymbolResult>>;
};
