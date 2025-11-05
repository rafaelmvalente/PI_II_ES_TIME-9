const { createTurma } = require('../models/turmas');

async function addTurma(req, res) {
  const { nome, codigo, periodo, id_turma } = req.body;

  if (!nome || !codigo || !periodo || !id_turma) {
    return res.status(400).json({ error: 'Nome, código, período e ID da turma são obrigatórios.' });
  }

  try {
    const result = await createTurma(nome, codigo, periodo, id_turma);
    res.status(201).json({ message: 'Turma inserida com sucesso!', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir turma no banco de dados.' });
  }
}

module.exports = { addTurma };