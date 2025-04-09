import { Router } from 'express';
import { fetchTransactions } from '../controller/transactions.controller';
 
const router = Router();

router.get('/transactions', fetchTransactions);

export default router;
