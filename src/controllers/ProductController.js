import Product from '../models/Product.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.getAll();

        res.json({
            data: products
        });
    } catch (error) {
        next(error);
    }
};


export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.getById(id);

        if (!product) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }

        res.json({
            data: product
        });

    } catch (error) {
        next(error);
    }
};


export const createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);

        res.status(201).json({
            message: 'Producto creado exitosamente',
            data: newProduct
        });

    } catch (error) {
        next(error);
    }
};


export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await Product.update(id, req.body);

        if (!updated) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }

        res.json({
            message: 'Producto actualizado correctamente',
            data: updated
        });

    } catch (error) {
        next(error);
    }
};


export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Product.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Producto no encontrado'
            });
        }

        res.json({
            message: 'Producto eliminado correctamente'
        });

    } catch (error) {
        next(error);
    }
};  