import pool from '../config/database.js';

class Product {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM products');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM products WHERE id = ?', [id]
        );
        return rows;
    }

    static async create(productData) {
        const { name, description, price, stock, category_id } = productData;
        const [result] = await pool.query(
            'INSERT INTO products (name, description, price, stock, category_id) VALUES (?, ?, ?, ?, ?)',
            [name, description, price, stock, category_id]
        );
        return { id: result.insertId, ...productData };
    }

    static async update(productData) {
        const { name, description, price, stock, category_id } = productData;
        const [result] = await pool.query(
            'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ? WHERE id = ?',
            [name, description, price, stock, category_id, productData.id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const result = await pool.query(
            'DELETE FROM products WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }
}

export default Product;