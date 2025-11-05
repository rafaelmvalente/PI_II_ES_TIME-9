const express = require('express');
const { addAluno } = require('../controllers/alunoController');
const router = express.Router();

router.post('/add', addAluno);

module.exports = router;