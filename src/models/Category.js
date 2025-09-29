import pool from "../config/database.js";

class Category {
    /**
     * Obtener todas las categorias
     */
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM categories');
        return rows;
    }

    /**
     * Obtener una categoria por ID
     * @param {*} id 
     */
    static async getById(id) {
        const [rows] = await pool.query(
            'SELECT * FROM categories WHERE id = ?', [id]
        );
        return rows;
    }

    /**
     * Crea una nueva categoria
     * @param {*} categoryData Datos a insertar, nombre y descripción
     * @returns resultado de inserción con información creada
     */
    static async create(categoryData) {
        const { name, description } = categoryData;
        const [result] = await pool.query(
            'INSERT INTO categories (name, description) VALUES (?, ?)',
            [name, description]
        );
        return { id: result.insertId, name, description };
    }

    /**
     * Actualizar una categoria
     * @param {*} id de la categoria a actualizar
     * @param {*} categoryData Datos a actualizar, nombre y descripción
     * @returns resultado de actualización, filas afectadas.
     */
    static async update(id, categoryData) {
        const { name, description } = categoryData;
        const [result] = await pool.query(
            'UPDATE categories SET name = ?, description = ? WHERE id = ?',
            [name, description, id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await pool.query(
            'DELETE FROM categories WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }
}

export default Category;