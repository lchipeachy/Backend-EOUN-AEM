const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asignacion', {
    codigoAsignacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoCursoCicloEscolar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cursocicloescolar',
        key: 'codigoCursoCicloEscolar'
      }
    },
    codigoAlumno: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'alumno',
        key: 'codigoAlumno'
      }
    },
    codigoProfesor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'profesor',
        key: 'codigoProfesor'
      }
    },
    promedio: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asignacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoAsignacion" },
        ]
      },
      {
        name: "codigoCursoCicloEscolar",
        using: "BTREE",
        fields: [
          { name: "codigoCursoCicloEscolar" },
        ]
      },
      {
        name: "codigoAlumno",
        using: "BTREE",
        fields: [
          { name: "codigoAlumno" },
        ]
      },
      {
        name: "codigoProfesor",
        using: "BTREE",
        fields: [
          { name: "codigoProfesor" },
        ]
      },
    ]
  });
};
