const Instituicao = require('../models/instituicao');

// Get all instituicoes
const getAllInstituicoes = async (req, res) => {
    try {
        const instituicoes = await Instituicao.findAll();
        res.status(200).json(instituicoes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch instituicoes' });
    }
};

// Get a single instituicao by ID
const getInstituicaoById = async (req, res) => {
    try {
        const { id } = req.params;
        const instituicao = await Instituicao.findByPk(id);
        if (instituicao) {
            res.status(200).json(instituicao);
        } else {
            res.status(404).json({ error: 'Instituicao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch instituicao' });
    }
};

// Create a new instituicao
const createInstituicao = async (req, res) => {
    try {
        const { Nome } = req.body;
        const newInstituicao = await Instituicao.create({ Nome });
        res.status(201).json(newInstituicao);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create instituicao' });
    }
};

// Update an instituicao by ID
const updateInstituicao = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nome } = req.body;
        const instituicao = await Instituicao.findByPk(id);
        if (instituicao) {
            instituicao.Nome = Nome;
            await instituicao.save();
            res.status(200).json(instituicao);
        } else {
            res.status(404).json({ error: 'Instituicao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update instituicao' });
    }
};

// Delete an instituicao by ID
const deleteInstituicao = async (req, res) => {
    try {
        const { id } = req.params;
        const instituicao = await Instituicao.findByPk(id);
        if (instituicao) {
            await instituicao.destroy();
            res.status(200).json({ message: 'Instituicao deleted successfully' });
        } else {
            res.status(404).json({ error: 'Instituicao not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete instituicao' });
    }
};

module.exports = {
    getAllInstituicoes,
    getInstituicaoById,
    createInstituicao,
    updateInstituicao,
    deleteInstituicao
};