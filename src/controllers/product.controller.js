import { ProductModel } from '../models/product.model.js';
import { ProductService } from '../service/product.service.js';

const service = new ProductService(new ProductModel());

export const create = async (req, res) => {
    const productData = req.body;
    const response = await service.create(productData);

    if (!response)
        return res.status(500).json({ error: 'Error create product' });

    res.json({ message: 'Create product0', payload: response });
};

export const getAll = async (req, res) => {
    const response = await service.getAll();

    if (!response)
        return res.status(500).json({ error: 'Error fetch products' });

    res.json({ message: 'Products fetched', payload: response });
};

export const getById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    const response = await service.getById(id);

    if (!response)
        return res.status(500).json({ error: 'Error fetch product by id' });

    res.json({ message: 'Product fetched by id', payload: response });
};

export const removeById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
    }

    const response = await service.removeById(id);

    if (!response)
        return res.status(500).json({ error: 'Error delete product by id' });

    res.json({ message: 'Product deleted by id', payload: response });
};
