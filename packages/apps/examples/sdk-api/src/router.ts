import express from 'express';
import nftController from './controllers/nft.controller';
import graphController from './controllers/graphApiClient.controller';
import tokenController from './controllers/token.controller';
const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: "Welcome to QuickNode's sdk api example!" });
});

router.get('/api/nftsByEns/:ensResource', nftController.getNFTsByEns);
router.get('/api/nftsByAddress/:address', nftController.getNFTsByAddress);
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
  '/api/getBalancesByWalletENS/:ensResource',
  tokenController.getBalancesByWalletEns
);
router.get(
  '/api/getBalancesByWalletAddress/:address',
  tokenController.getBalancesByWalletAddress
);

export default router;
