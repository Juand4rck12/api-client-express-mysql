import { Router } from "express";
import {
    getAllOrders,
    getOrdersById,
    createOrder,
    updateOrder,
    deleteOrder
} from '../controllers/OrderController.js';

const router = Router();

// GET /api/orders - Obtener todas las ordenes
router.get('/', getAllOrders);

// GET /api/orders/:id - Obtener una orden especifica
router.get('/:id', getOrdersById);

// POST /api/orders - Crear nueva orden
router.post('/', createOrder);

// PUT /api/orders/:id - Actualizar orden
router.put('/:id', updateOrder);

// DELETE /api/orders/:id - ELiminar orden
router.delete('/:id', deleteOrder);

export default router