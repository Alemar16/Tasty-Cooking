const { DataTypes } = require('sequelize');
/* Exportando la Conexion */
module.exports = (sequelize) => {
  /* Definimos el Models */
  sequelize.define(
    'recipe',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 100,
        },
      },
      /* hace Referencia al paso a paso de la comida */
      stepbyStep: {
        /* type: DataTypes.STRING, */
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createIndb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
