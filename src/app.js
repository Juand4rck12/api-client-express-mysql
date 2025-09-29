import express from 'express';
import CategoryRoutes from './routes/CategoryRoutes.js';
// import ProductRoutes from './routes/ProductRoutes.js';
// import OrderRoutes from './routes/OrderRoutes.js';
// import SupplierRoutes from './routes/SupplierRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Middlewares globales
app.use(express.json()); // para parsear a JSON en las peticiones
app.use(express.urlencoded({ extended: true })); // para formularios

// Rutas API
app.use('/api/categories', CategoryRoutes);
// app.use('/api/products', ProductRoutes);
// app.use('/api/orders', OrderRoutes);
// app.use('/api/suppliers', SupplierRoutes);

// Ruta de prueba
app.use('/', (req, res) => {
    res.json({
        message: 'API funcionando correctamente',
        endpoints: {
            categories: '/api/categories',
            products: '/api/products',
            orders: '/api/orders',
            suppliers: '/api/suppliers'
        }
    });
});

app.use(errorHandler);

export default app