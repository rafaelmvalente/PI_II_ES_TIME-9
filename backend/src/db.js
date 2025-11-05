const oracledb = require('oracledb');

const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'your_connection_string',
};

async function getConnection() {
  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

module.exports = { getConnection };
