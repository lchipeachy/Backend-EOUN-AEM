const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumno', {
    codigoAlumno: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    CodigoPersonal: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    codigoMunicipio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'municipio',
        key: 'codigoMunicipio'
      }
    },
    Nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FechaDeNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Genero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CodigoSeccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'seccion',
        key: 'codigoSeccion'
      }
    },
    codigoEncargado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'encargado',
        key: 'codigoEncargado'
      }
    },
    codigoRol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GradoId: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alumno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoAlumno" },
        ]
      },
      {
        name: "codigoMunicipio",
        using: "BTREE",
        fields: [
          { name: "codigoMunicipio" },
        ]
      },
      {
        name: "CodigoSeccion",
        using: "BTREE",
        fields: [
          { name: "CodigoSeccion" },
        ]
      },
      {
        name: "codigoEncargado",
        using: "BTREE",
        fields: [
          { name: "codigoEncargado" },
        ]
      },
    ]
  });
};
