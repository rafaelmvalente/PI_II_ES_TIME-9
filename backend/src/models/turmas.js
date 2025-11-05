const { getConnection } = require('../db');

async function createTurma(nome, codigo, periodo, id_turma) {
  const connection = await getConnection();
  try {
    const result = await connection.execute(
      `INSERT INTO turmas (nome, codigo, periodo, id_turma) VALUES (:nome, :codigo, :periodo, :id_turma)`,
      { nome, codigo, periodo, id_turma },
      { autoCommit: true }
    );
    return result;
  } finally {
    await connection.close();
  }
}

module.exports = { createTurma };