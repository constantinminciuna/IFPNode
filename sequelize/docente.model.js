const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('Docente', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cognome: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        telefono: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        titolo_di_studio: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },{
        timestamps: false
      });
};