import Orders from '../models/Order.js';

export const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Orders.getAll();

        res.json({
            data: orders
        });

    } catch (error) {
        next(error);
    }
};


export const getOrdersById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const order = await Orders.getById(id);

        if (!order) {
            return res.status(404).json({
                message: 'Orden no encontrada'
            });
        }

        res.json({
            data: order
        });

    } catch (error) {
        next(error);    
    }
};


export const createOrder = async (req, res, next) => {
    try {
        const newOrder = await Orders.create(req.body);
        
        res.status(201).json({
            message: 'Orden creada exitosamente',
            data: newOrder
        });

    } catch (error) {
        next(error);
    }
};

export const updateOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await Orders.update(id, req.params);
        
        if (!updated) {
            return res.status(404).json({
                message: 'Orden no encontrada'
            });
        }

        res.json({
            message: 'Orden actualizada correctamente',
            data: updated
        });

    } catch (error) {
        next(error);
    }
};


export const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Orders.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Categoria no encontrada'
            });
        }

        res.json({
            message: 'Orden eliminada exitosamente'
        });

    } catch (error) {
        next(error);
    }
};