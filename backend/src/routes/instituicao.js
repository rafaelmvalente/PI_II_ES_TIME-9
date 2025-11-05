const express = require('express');
const {
    getAllInstituicoes,
    getInstituicaoById,
    createInstituicao,
    updateInstituicao,
    deleteInstituicao
} = require('../controllers/instituicaoController');
const router = express.Router();

// Get all instituicoes
router.get('/', getAllInstituicoes);

// Get a single instituicao by ID
router.get('/:id', getInstituicaoById);

// Create a new instituicao
router.post('/', createInstituicao);

// Update an instituicao by ID
router.put('/:id', updateInstituicao);

// Delete an instituicao by ID
router.delete('/:id', deleteInstituicao);

module.exports = router;