import pool from '../config/database.js';

class OrderItem {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM order_items');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM order_items WHERE id = ?', [id]
        );
        return rows;
    }

    static async getByOrderId(orderId) {
        const [rows] = await pool.query(
            'SELECT * FROM order_items WHERE order_id = ?', [orderId]
        );
        return rows;
    }

    static async create(orderItemData) {
        const { order_id, product_id, quantity, unit_price } = orderItemData;
        const [result] = await pool.query(
            'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)',
            [order_id, product_id, quantity, unit_price]
        );
        return { id: result.insertId, ...orderItemData };
    }

    static async update(orderItemData) {
        const { order_id, product_id, quantity, unit_price } = orderItemData;
        const [result] = await pool.query(
            'UPDATE order_items SET order_id = ?, product_id = ?, quantity = ?, unit_price = ? WHERE id = ?',
            [order_id, product_id, quantity, unit_price, orderItemData.id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await pool.query(
            'DELETE FROM order_items WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }

    static async deleteByOrderId(orderId) {
        const [result] = await pool.query(
            'DELETE FROM order_items WHERE order_id = ?',
            [orderId]
        );
        return result.affectedRows > 0;
    }
}

export default OrderItem;
