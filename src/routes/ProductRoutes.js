import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController.js';

const router = Router();

// GET /api/products - Obtener todos los productos
router.get('/', getAllProducts);

// GET /api/products/:id - Obtener un producto especifico
router.get('/:id', getProductById);

// POST /api/products - Crear nuevo producto
router.post('/', createProduct);

// PUT /api/products/:id - Actualizar producto
router.put('/:id', updateProduct);

// DELETE /api/products/:id - Eliminar producto
router.delete('/:id', deleteProduct);

export default router
