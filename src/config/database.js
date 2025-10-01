import mysql from 'mysql2/promise';
import dotenv from 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'developer',
    password: process.env.PASSWORD || 'developer',
    database: process.env.DATABASE || 'market_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Funcion para probar la conexión
export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos exitosa');
        connection.release();
    } catch (error) {
        console.error('Error conectando a la base de datos:', error.message);
    }
};

export default pool;