const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const departamentoModel = sequelize.define('departamento', {
    codigoDepartamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'departamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoDepartamento" },
        ]
      },
    ]
  });

console.log("modelo", departamentoModel);
module.exports = {departamentoModel};
