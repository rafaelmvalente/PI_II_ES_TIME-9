const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

// Get all disciplinas
router.get('/', disciplinaController.getAllDisciplinas);

// Get a single disciplina by ID
router.get('/:id', disciplinaController.getDisciplinaById);

// Create a new disciplina
router.post('/', disciplinaController.createDisciplina);

// Update a disciplina by ID
router.put('/:id', disciplinaController.updateDisciplina);

// Delete a disciplina by ID
router.delete('/:id', disciplinaController.deleteDisciplina);

module.exports = router;