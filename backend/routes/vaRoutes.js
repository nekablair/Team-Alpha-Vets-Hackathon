import express from 'express';
const router = express.Router();
import { getAllVA, getVAByState, getVAByZip, getEquineByState } from '../controllers/vaController.js';
router.route('/all').get(getAllVA);
router.route('/state').post(getVAByState);
router.route('/zip').post(getVAByZip);
router.route('/state/equine').post(getEquineByState);
export default router;
