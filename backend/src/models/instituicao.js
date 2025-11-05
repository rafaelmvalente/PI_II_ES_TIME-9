const { DataTypes } = require('sequelize');
const db = require('../db');

const Instituicao = db.define('Instituicao', {
    id_instituicao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Instituicao;