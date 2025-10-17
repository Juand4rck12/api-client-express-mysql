import OrderItem from '../models/OrderItem.js';

export const getAllOrderItems = async (req, res, next) => {
    try {
        const orderItems = await OrderItem.getAll();

        res.json({
            data: orderItems
        });
    } catch (error) {
        next(error);
    }
};


export const getOrderItemById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const orderItem = await OrderItem.getById(id);

        if (!orderItem || orderItem.length === 0) {
            return res.status(404).json({
                message: 'Item de orden no encontrado'
            });
        }

        res.json({
            data: orderItem
        });

    } catch (error) {
        next(error);
    }
};


export const getOrderItemsByOrderId = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const orderItems = await OrderItem.getByOrderId(orderId);

        res.json({
            data: orderItems
        });

    } catch (error) {
        next(error);
    }
};


export const createOrderItem = async (req, res, next) => {
    try {
        const newOrderItem = await OrderItem.create(req.body);

        res.status(201).json({
            message: 'Item de orden creado exitosamente',
            data: newOrderItem
        });

    } catch (error) {
        next(error);
    }
};


export const updateOrderItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await OrderItem.update({ id, ...req.body });

        if (!updated) {
            return res.status(404).json({
                message: 'Item de orden no encontrado'
            });
        }

        res.json({
            message: 'Item de orden actualizado correctamente',
            data: { id, ...req.body }
        });

    } catch (error) {
        next(error);
    }
};


export const deleteOrderItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await OrderItem.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Item de orden no encontrado'
            });
        }

        res.json({
            message: 'Item de orden eliminado correctamente'
        });

    } catch (error) {
        next(error);
    }
};


export const deleteOrderItemsByOrderId = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const deleted = await OrderItem.deleteByOrderId(orderId);

        if (!deleted) {
            return res.status(404).json({
                message: 'No se encontraron items para esta orden'
            });
        }

        res.json({
            message: 'Items de orden eliminados correctamente'
        });

    } catch (error) {
        next(error);
    }
};
