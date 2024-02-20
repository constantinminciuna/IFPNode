const { DataTypes } = require('sequelize');

const sequelize = require('../db/sequelize'); // Importa l'istanza di Sequelize

// Definizione del modello
const Docente = sequelize.define('Docente', {
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

// Definizione del modello
const Corso = sequelize.define('Corso', {
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

Corso.belongsTo(Docente, {foreignKey: 'id_docente'});
Docente.hasMany(Corso, { foreignKey: 'id_docente' });

// Definizione del modello
const Sede = sequelize.define('Sede', {
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

Corso.sync();
Docente.sync();
Sede.sync();
sequelize.sync();

module.exports = { Docente, Corso, Sede }; // Esporta i modelli