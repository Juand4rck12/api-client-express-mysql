import app from './src/app.js';
import { testConnection } from './src/config/database.js';
import dotenv from 'dotenv/config';

const PORT = process.env.PORT || 3000;

testConnection();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});