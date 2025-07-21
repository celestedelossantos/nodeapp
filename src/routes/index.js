import { Router } from 'express';
import ProductRouter from './product.router.js';
import AuthRouter from './auth.router.js';
import { isAuth } from '../middleware/authenticate.js';

const router = Router();

router.use('/products', isAuth, ProductRouter);
router.use('/auth', AuthRouter);

export default router;
