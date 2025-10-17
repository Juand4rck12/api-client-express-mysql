import Category from "../models/Category.js";

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.getAll();
        res.json({
            data: categories
        });
    } catch (error) {
        next(error);
    }
};


export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await Category.getById(id);

        if (!category) {
            return res.status(404).json({
                message: 'Categoria no encontrada'
            });
        }

        res.json({
            data: category
        });

    } catch (error) {
        next(error)
    }
}


export const createCategory = async (req, res, next) => {
    try {
        const categoryExists = await Category.getByName(req.body.name);

        if (categoryExists.length > 0) {
            return res.status(400).json({
                message: 'Ya existe una categoria con ese nombre'
            });
        }

        const newCategory = await Category.create(req.body);

        res.status(201).json({
            message: 'Categoria creada exitosamente',
            data: newCategory
        });
    } catch (error) {
        next(error)
    }
}


export const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await Category.update(id, req.body);

        if (!updated) {
            return res.status(404).json({
                message: 'Categoria no encontrada'
            });
        }

        res.json({
            message: 'Categoria actualizada exitosamente'
        });
    } catch (error) {
        next(error)
    }
}


export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Category.delete(id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Categoria no encontrada'
            });
        }

        res.json({
            message: 'Categoria eliminada exitosamente'
        });
    } catch (error) {
        next(error)
    }
}