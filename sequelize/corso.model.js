const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('Corso', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        durata: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },{
        timestamps: false
      });
};