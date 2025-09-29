import { Router } from "express";
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from '../controllers/CategoryController.js';

const router = Router();

// GET /api/categories - Obtener todas las categorias
router.get('/', getAllCategories);

// GET /api/categories/:id - Obtener una categoria especifica
router.get('/:id', getCategoryById);

// POST /api/categories - Crear nueva categoria
router.post('/', createCategory);

// PUT /api/categories/:id - Actualizar categoria
router.put('/:id', updateCategory);

// DELETE /api/categories/:id - ELiminar categoria
router.delete('/:id', deleteCategory);

export default router