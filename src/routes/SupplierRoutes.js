import { Router } from "express";
import {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from '../controllers/SupplierController.js';

const router = Router();

// GET /api/suppliers - Obtener todos los proveedores
router.get('/', getAllSuppliers);

// GET /api/suppliers/:id - Obtener un proveedor especifico
router.get('/:id', getSupplierById);

// POST /api/suppliers - Crear nuevo proveedor
router.post('/', createSupplier);

// PUT /api/suppliers/:id - Actualizar proveedor
router.put('/:id', updateSupplier);

// DELETE /api/suppliers/:id - Eliminar proveedor
router.delete('/:id', deleteSupplier);

export default router
