const { createDisciplina } = require('../models/disciplina');

async function addDisciplina(req, res) {
  const { nome, sigla, codigo, periodo, id_disciplina } = req.body;

  if (!nome || !sigla || !codigo || !periodo || !id_disciplina) {
    return res.status(400).json({ error: 'Nome, sigla, código, período e ID da disciplina são obrigatórios.' });
  }

  try {
    const result = await createDisciplina(nome, sigla, codigo, periodo, id_disciplina);
    res.status(201).json({ message: 'Disciplina inserida com sucesso!', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao inserir disciplina no banco de dados.' });
  }
}

module.exports = { addDisciplina };