import express from 'express';
import nftController from './controllers/nft.controller';
import graphController from './controllers/graphApiClient.controller';
import tokenController from './controllers/token.controller';
import contractsController from './controllers/contracts.controller';
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
  nftController.getCollectionEvents
);
router.get(
  '/api/nftEvents/:contractAddress/:tokenId',
  nftController.getNFTEvents
);
router.get('/api/graphQuery', graphController.graphQuery);
router.get(
  '/api/getBalancesByWallet/:address',
  tokenController.getBalancesByWallet
);
router.get(
  '/api/getContractDetails/:contractAddress',
  contractsController.getContractDetails
);

export default router;
