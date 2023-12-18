import express from 'express';
import coreController from './controllers/core.controller';
const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: "Welcome to QuickNode's sdk api example!" });
});

router.get('/api/core/sdk_fetch_nfts/:wallet', coreController.sdk_qn_fetchNFTs);
router.get('/api/core/sdk_viem_methods', coreController.viemMethods);
router.get('/api/core/sdk_chain_id', coreController.sdk_getChainId);

export default router;
