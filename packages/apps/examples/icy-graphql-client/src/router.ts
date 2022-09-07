import express from 'express';
import nftController from './controllers/nft.controller';
const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: 'Welcome to icy-graphql-client example!' });
});

router.get('/api/nftsByEns/:ensResource', nftController.getNFTsByEns);

export default router;
