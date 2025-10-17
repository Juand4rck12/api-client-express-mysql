import Supplier from '../models/Supplier.js';

export const getAllSuppliers = async (req, res, next) => {
    try {
        const suppliers = await Supplier.getAll();

        res.json({
            data: suppliers
        });
    } catch (error) {
        next(error);
    }
};


export const getSupplierById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.getById(id);

        if (!supplier) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }

        res.json({
            data: supplier
        });

    } catch (error) {
        next(error);
    }
};


export const createSupplier = async (req, res, next) => {
    try {
        const newSupplier = await Supplier.create(req.body);

        res.status(201).json({
            message: 'Proveedor creado exitosamente',
            data: newSupplier
        });

    } catch (error) {
        next(error);
    }
};


export const updateSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await Supplier.update({ id, ...req.body });

        if (!updated) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }

        res.json({
            message: 'Proveedor actualizado correctamente',
            data: { id, ...req.body }
        });

    } catch (error) {
        next(error);
    }
};


export const deleteSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Supplier.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Proveedor no encontrado'
            });
        }

        res.json({
            message: 'Proveedor eliminado correctamente'
        });

    } catch (error) {
        next(error);
    }
};
