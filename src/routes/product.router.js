import { Router } from 'express';
import * as ProductController from '../controllers/product.controller.js';

const router = Router();

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getById);

router.post('/create', ProductController.create);

router.delete('/:id', ProductController.removeById);

export default router;
