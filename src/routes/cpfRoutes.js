import { Router } from 'express';
import { getNewCpf } from '../controllers/cpfControllers.js';

const router = Router();

router.get('/newCpf', getNewCpf);

export default router;
