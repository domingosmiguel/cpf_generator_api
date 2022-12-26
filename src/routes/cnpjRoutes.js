import { Router } from 'express';
import { getNewCnpj } from '../controllers/cnpjControllers.js';

const router = Router();

router.get('/newCNPJ', getNewCnpj);

export default router;
