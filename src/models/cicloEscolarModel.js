const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

const cicloModel = sequelize.define('ciclo', {  
  codigoCicloEscolar: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Descripcion: {  
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'cicloescolar', 
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "codigoCicloEscolar" },
      ]
    },
  ]
});

console.log("modelo", cicloModel);
module.exports = {cicloModel};  
