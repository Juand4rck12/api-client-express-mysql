import { Router } from "express";
import {
    getAllOrderItems,
    getOrderItemById,
    getOrderItemsByOrderId,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
    deleteOrderItemsByOrderId
} from '../controllers/OrderItemController.js';

const router = Router();

// GET /api/order-items - Obtener todos los items de ordenes
router.get('/', getAllOrderItems);

// GET /api/order-items/:id - Obtener un item de orden especifico
router.get('/:id', getOrderItemById);

// GET /api/order-items/order/:orderId - Obtener todos los items de una orden especifica
router.get('/order/:orderId', getOrderItemsByOrderId);

// POST /api/order-items - Crear nuevo item de orden
router.post('/', createOrderItem);

// PUT /api/order-items/:id - Actualizar item de orden
router.put('/:id', updateOrderItem);

// DELETE /api/order-items/:id - Eliminar item de orden
router.delete('/:id', deleteOrderItem);

// DELETE /api/order-items/order/:orderId - Eliminar todos los items de una orden
router.delete('/order/:orderId', deleteOrderItemsByOrderId);

export default router
