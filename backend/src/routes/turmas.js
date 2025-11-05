const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

// Get all turmas
router.get('/', turmaController.getAllTurmas);

// Get a single turma by ID
router.get('/:id', turmaController.getTurmaById);

// Create a new turma
router.post('/', turmaController.createTurma);

// Update a turma by ID
router.put('/:id', turmaController.updateTurma);

// Delete a turma by ID
router.delete('/:id', turmaController.deleteTurma);

module.exports = router;