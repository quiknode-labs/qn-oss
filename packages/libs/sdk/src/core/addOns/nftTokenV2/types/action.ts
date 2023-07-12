import { type SimplifyType } from '../../../../lib/types';
import { RpcSchemaOverride } from 'viem';
import {
  type QNFetchNFTMethod,
  type QNFetchNFTInput,
  type QNFetchNFTResult,
} from './qn_fetchNFTs';
import {
  type QNFetchNFTCollectionDetailsMethod,
  type QNFetchNFTCollectionDetailsInput,
  type QNFetchNFTCollectionDetailsResult,
} from './qn_fetchNFTCollectionDetails';
import {
  type QNFetchNFTsByCollectionMethod,
  type QNFetchNFTsByCollectionInput,
  type QNFetchNFTsByCollectionResult,
} from './qn_fetchNFTsByCollection';
import {
  type QNGetTransfersByNFTMethod,
  type QNGetTransfersByNFTInput,
  type QNGetTransfersByNFTResult,
} from './qn_getTransfersByNFT';
import {
  type QNVerifyNFTsByOwnerMethod,
  type QNVerifyNFTsOwnerInput,
  type QNVerifyNFTsOwnerResult,
} from './qn_verifyNFTsOwner';
import {
  type QNGetTokenMetadataByCAMethod,
  type QNGetTokenMetadataByCAInput,
  type QNGetTokenMetadataByCAResult,
} from './qn_getTokenMetadataByContractAddress';
import {
  type QNGetTokenMetadataBySymbolMethod,
  type QNGetTokenMetadataBySymbolInput,
  type QNGetTokenMetadataBySymbolResult,
} from './qn_getTokenMetadataBySymbol';
import {
  type QNGetTransactionsByAddressMethod,
  type QNGetTransactionsByAddressInput,
  type QNGetTransactionsByAddressResult,
} from './qn_getTransactionsByAddress';
import {
  type QNGetWalletTokenBalanceMethod,
  type QNGetWalletTokenBalanceInput,
  type QNGetWalletTokenBalanceResult,
} from './qn_getWalletTokenBalance';
import {
  type QNGetWalletTokenTransactionsMethod,
  type QNGetWalletTokenTransactionsInput,
  type QNGetWalletTokenTransactionsResult,
} from './qn_getWalletTokenTransactions';

export type NFTAndTokenMethods = [
  QNFetchNFTMethod,
  QNFetchNFTCollectionDetailsMethod,
  QNFetchNFTsByCollectionMethod,
  QNGetTransfersByNFTMethod,
  QNVerifyNFTsByOwnerMethod,
  QNGetTokenMetadataByCAMethod,
  QNGetTokenMetadataBySymbolMethod,
  QNGetTransactionsByAddressMethod,
  QNGetWalletTokenBalanceMethod,
  QNGetWalletTokenTransactionsMethod
];

export type NFTAndTokenSchema = RpcSchemaOverride & NFTAndTokenMethods;

export type NFTAndTokenActions = {
  /**
   * Returns aggregated data on NFTs for a given wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_fetchNFTs_v2
   *
   * @param args - {@link QNFetchNFTInput}
   * @returns response - {@link QNFetchNFTsResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_fetchNFTs({
   *   wallet: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6",
   *   contracts: ['0x2106C00Ac7dA0A3430aE667879139E832307AeAa'],
   * });
   */
  qn_fetchNFTs: (
    args: SimplifyType<QNFetchNFTInput>
  ) => Promise<SimplifyType<QNFetchNFTResult>>;
  /**
   * Returns aggregated data on NFTs for a given wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_fetchNFTCollectionDetails_v2
   *
   * @param args - {@link QNFetchNFTCollectionDetailsInput}
   * @returns response - {@link QNFetchNFTCollectionDetailsResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_fetchNFTCollectionDetails({
   *   contracts: [
   *     "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
   *     "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
   *   ]
   * });
   */

  qn_fetchNFTCollectionDetails: (
    args: SimplifyType<QNFetchNFTCollectionDetailsInput>
  ) => Promise<SimplifyType<QNFetchNFTCollectionDetailsResult>>;
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
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_fetchNFTsByCollection({
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
  * import QuickNode from '@quicknode/sdk';
  *
  * const core = new QuickNode.Core({
  *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
  *   config: {
  *     addOns: { nftTokenV2: true }
  *   }
  * }
  *
  * const response = await core.client.qn_getTransfersByNFT({
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
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_verifyNFTsOwner({
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
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_getTokenMetadataByContractAddress({
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
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_getTokenMetadataBySymbol({
   *   symbol: "DAI",
   * })
   */
  qn_getTokenMetadataBySymbol: (
    args: SimplifyType<QNGetTokenMetadataBySymbolInput>
  ) => Promise<SimplifyType<QNGetTokenMetadataBySymbolResult>>;
  /**
   * Returns transactions within a specified wallet address.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_getTransactionsByAddress_v2
   *
   * @param args - {@link QNGetTransactionsByAddressInput}
   * @returns response - {@link QNGetTransactionsByAddressResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_getTransactionsByAddress({
   *   address: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6"
   * })
   */
  qn_getTransactionsByAddress: (
    args: SimplifyType<QNGetTransactionsByAddressInput>
  ) => Promise<SimplifyType<QNGetTransactionsByAddressResult>>;

  /**
   * Returns ERC-20 tokens and token balances within a wallet.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_getWalletTokenBalance_v2
   *
   * @param args - {@link QNGetWalletTokenBalanceInput}
   * @returns response - {@link QNGetWalletTokenBalanceResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_getWalletTokenBalance({
   *  address: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6"
   * })
   */
  qn_getWalletTokenBalance: (
    args: SimplifyType<QNGetWalletTokenBalanceInput>
  ) => Promise<SimplifyType<QNGetWalletTokenBalanceResult>>;
  /*
   * Returns transfers of a specified token within a specified wallet address.
   *
   * - Docs: https://www.quicknode.com/docs/ethereum/qn_getWalletTokenTransactions_v2
   *
   * @param args - {@link QNGetWalletTokenTransactionsInput}
   * @returns response - {@link QNGetWalletTokenTransactionsResult}
   *
   * @example
   * import QuickNode from '@quicknode/sdk';
   *
   * const core = new QuickNode.Core({
   *   endpointUrl: "https://some-cool-name.quiknode.pro/abcd1234",
   *   config: {
   *     addOns: { nftTokenV2: true }
   *   }
   * }
   *
   * const response = await core.client.qn_getWalletTokenTransactions({
   *  address: "0xD10E24685c7CDD3cd3BaAA86b09C92Be28c834B6"
   * })
   */
  qn_getWalletTokenTransactions: (
    args: SimplifyType<QNGetWalletTokenTransactionsInput>
  ) => Promise<SimplifyType<QNGetWalletTokenTransactionsResult>>;
};
