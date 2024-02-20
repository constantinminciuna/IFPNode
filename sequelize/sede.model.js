const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('Sede', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        citta: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        indirizzo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        telefono: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },{
        timestamps: false
      });
};