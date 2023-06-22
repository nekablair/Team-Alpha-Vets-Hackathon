import express from 'express';
const router = express.Router();
import { getAllVA, getVAByState, getVAByZip } from '../controllers/vaController.js';
router.route('/').get(getAllVA);
router.route('/state').post(getVAByState);
router.route('/zip').post(getVAByZip);
export default router;
