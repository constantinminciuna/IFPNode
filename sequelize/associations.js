function associations(sequelize) {
	const { Corso, Docente } = sequelize.models;

	Corso.belongsTo(Docente, {foreignKey: 'id_docente'});
    Docente.hasMany(Corso, { foreignKey: 'id_docente' });
}

module.exports = { associations };