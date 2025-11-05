const { getConnection } = require('../db');

async function createAluno(matricula, nome) {
  const connection = await getConnection();
  try {
    const result = await connection.execute(
      `INSERT INTO alunos (matricula, nome) VALUES (:matricula, :nome)`,
      { matricula, nome },
      { autoCommit: true }
    );
    return result;
  } finally {
    await connection.close();
  }
}

module.exports = { createAluno };