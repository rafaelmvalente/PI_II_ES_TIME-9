const { getConnection } = require('../db');

async function createDisciplina(nome, sigla, codigo, periodo, id_disciplina) {
  const connection = await getConnection();
  try {
    const result = await connection.execute(
      `INSERT INTO disciplinas (nome, sigla, codigo, periodo, id_disciplina) VALUES (:nome, :sigla, :codigo, :periodo, :id_disciplina)`,
      { nome, sigla, codigo, periodo, id_disciplina },
      { autoCommit: true }
    );
    return result;
  } finally {
    await connection.close();
  }
}

module.exports = { createDisciplina };