import pool from '../config/database.js';

class Supplier {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM suppliers');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM suppliers WHERE id = ?', [id]
        );
        return rows;
    }

    static async create(supplierData) {
        const { name, phone, email } = supplierData;
        const [result] = await pool.query(
            'INSERT INTO suppliers (`name`, phone, email) VALUES (?, ?, ?)',
            [name, phone, email]
        );
        return { id: result.insertId, ...supplierData };
    }

    static async update(supplierData) {
        const { name, phone, email } = supplierData;
        const [result] = await pool.query(
            'UPDATE suppliers SET `name` = ?, phone = ?, email = ? WHERE id = ?',
            [name, phone, email, supplierData.id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await pool.query(
            'DELETE FROM suppliers WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }
}

export default Supplier;