const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cursocicloescolar', {
    codigoCursoCicloEscolar: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoCicloEscolar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cicloescolar',
        key: 'codigoCicloEscolar'
      }
    },
    codigoCurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curso',
        key: 'codigoCurso'
      }
    }
  }, {
    sequelize,
    tableName: 'cursocicloescolar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoCursoCicloEscolar" },
        ]
      },
      {
        name: "codigoCicloEscolar",
        using: "BTREE",
        fields: [
          { name: "codigoCicloEscolar" },
        ]
      },
      {
        name: "codigoCurso",
        using: "BTREE",
        fields: [
          { name: "codigoCurso" },
        ]
      },
    ]
  });
};
