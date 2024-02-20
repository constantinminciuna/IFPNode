const { Sequelize } = require('sequelize');
const { associations } = require('./associations');
const config = require('./config');


const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const modelDefiners = [
	require('./corso.model'),
	require('./sede.model'),
	require('./docente.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
associations(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;