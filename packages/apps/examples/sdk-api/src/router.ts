import express from 'express';
import nftController from './controllers/nft.controller';
import eventsController from './controllers/events.controller';
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
  '/api/contractEvents/:contractAddress',
  eventsController.getContractEvents
);

export default router;
