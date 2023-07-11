import express from 'express';
import nftController from './controllers/nft.controller';
import graphController from './controllers/graphApiClient.controller';
import tokenController from './controllers/token.controller';
import utilController from './controllers/util.controller';
import contractsController from './controllers/contracts.controller';
import transactionsController from './controllers/transactions.controller';
import eventsController from './controllers/events.controller';
import coreController from './controllers/core.controller';
const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: "Welcome to QuickNode's sdk api example!" });
});

router.get('/api/nftsByWallet/:address', nftController.getNFTsByWallet);
router.get('/api/trendingCollections', nftController.getTrendingCollections);
router.get(
  '/api/nftsByContractAddress/:contractAddress',
  nftController.getNFTsByContractAddress
);
router.get(
  '/api/nftDetails/:contractAddress/:tokenId',
  nftController.getNFTDetails
);
router.get(
  '/api/nftCollectionDetails/:contractAddress',
  nftController.getCollectionDetails
);
router.get(
  '/api/nftCollectionEvents/:contractAddress',
  eventsController.getCollectionEvents
);
router.get(
  '/api/nftEvents/:contractAddress/:tokenId',
  eventsController.getNFTEvents
);
router.get(
  '/api/verifyOwnership/:walletAddress/:contractAddress',
  nftController.verifyOwnershipByAddress
);
router.get('/api/graphQuery', graphController.graphQuery);
router.get(
  '/api/getBalancesByWallet/:address',
  tokenController.getBalancesByWallet
);
router.get('/api/getGasPrices', utilController.getGasPrices);
router.get(
  '/api/getContractDetails/:contractAddress',
  contractsController.getContractDetails
);
router.get(
  '/api/getTransactionsByWallet/:address',
  transactionsController.getTransactionsByWallet
);
router.get(
  '/api/getEventsByContract/:contractAddress',
  eventsController.getEventsByContract
);
router.get(
  '/api/getAllTransactions/:blockNumber',
  transactionsController.getAllTransactions
);
router.get('/api/transactionByHash/:hash', transactionsController.getByHash);
router.get('/api/getAllEvents/:blockNumber', eventsController.getAllEvents);
router.get('/api/core/sdk_fetch_nfts/:wallet', coreController.sdk_qn_fetchNFTs);
router.get('/api/core/sdk_viem_methods', coreController.viemMethods);
router.get('/api/core/sdk_chain_id', coreController.sdk_getChainId);
router.get(
  '/api/core/getContractWithApiClient/:address',
  coreController.getContractWithApiClient
);
export default router;
