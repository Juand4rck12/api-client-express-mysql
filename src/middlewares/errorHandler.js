const errorHandler = (err, req, res, next) => {
    console.error("Error:", err);

    if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({
            message: 'Ya existe un registro con esos datos'
        });
    }

    if (err.code === "ER_NO_REFERENCED_ROW_2") {
        return res.status(400).json({
            message: 'Referencia invalida a otra tabla'
        });
    }

    res.status(500).json({
        message: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
}

export default errorHandler;