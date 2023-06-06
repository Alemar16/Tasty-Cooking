const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
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
      
      stepbyStep: {
       
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
