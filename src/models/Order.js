import pool from "../config/database.js";

class Order {

    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM orders');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM orders WHERE id = ?', [id]
        );
        return rows;
    }

    static async create(orderData) {
        const { order_date, customer_name } = orderData;
        const [result] = await pool.query(
            'INSERT INTO orders (order_date, customer_name) VALUES (?, ?)',
            [order_date, customer_name]
        );
        return { id: result.insertId, ...orderData };
    }

    static async update(id, orderData) {
        const { order_date, customer_name } = orderData;
        const [result] = await pool.query(
            'UPDATE orders SET order_date = ?, customer_name = ? WHERE id = ?',
            [order_date, customer_name, id]
        );
        return result.affectedRows > 0; 
    }
    
    static async delete(id) {
        const result = await pool.query(
            'DELETE FROM orders WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0; 
    }
}

export default Order;