const { createAluno } = require('../models/aluno');

async function addAluno(req, res) {
  const { matricula, nome } = req.body;

  if (!matricula || !nome) {
    return res.status(400).json({ error: 'Matrícula e nome são obrigatórios.' });
  }

  try {
    const result = await createAluno(matricula, nome);
    res.status(201).json({ message: 'Aluno inserido com sucesso!', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir aluno no banco de dados.' });
  }
}

module.exports = { addAluno };