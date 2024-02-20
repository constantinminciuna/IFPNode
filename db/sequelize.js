const Sequelize = require('sequelize');
const config = require('./config'); // Assicurati che il percorso sia corretto

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

// Verifica la connessione al database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connessione al database riuscita.');
  })
  .catch((err) => {
    console.error('Errore nella connessione al database:', err);
  });

module.exports = sequelize;