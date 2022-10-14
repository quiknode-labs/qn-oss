import express from 'express';
import nftController from './controllers/nft.controller';
const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: "Welcome to QuickNode's nft-sdk example!" });
});

router.get('/api/nftsByEns/:ensResource', nftController.getNFTsByEns);
router.get(
  '/api/getNFTsByContractAddress/:address',
  nftController.getNFTsByContractAddress
);

router.get(
  '/api/nftsByWalletAddress/:walletAddress/:after?',
  nftController.getNFTsByWalletAddress
);

export default router;
