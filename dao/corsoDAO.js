const sequelize = require('../sequelize/sqlize');

// Operazione Create (C)
async function createCorso(corsoData) {
  try {
    const corso = await sequelize.models.Corso.create(corsoData);
    const corsoJSON = corso.map(c => c.get({ plain: true }));
    return corsoJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Read (R)
async function getCorsoById(corsoId) {
  try {
    const corso = await sequelize.models.Corso.findByPk(corsoId);
    const corsoJSON = corso.map(c => c.get({ plain: true }));
    return corsoJSON;
  } catch (error) {
    throw error;
  }
}

async function getAllRecords() {
  try {
    const corsi = await sequelize.models.Corso.findAll({
                            attributes: ['id', 'nome', 'durata'],
                            include: [{
                              model: sequelize.models.Docente,
                              attributes: ['id', 'nome', 'cognome', 'telefono', 'titolo_di_studio']
                            }]
                          });

    const corsiJSON = corsi.map(c => c.get({ plain: true }));
    return corsiJSON;
  } catch (error) {
    console.error('Errore nella query:', error);
    throw error;
  }
}

// Operazione Update (U)
async function updateCorso(corsoId, corsoData) {
  try {
    const corso = await sequelize.models.Corso.findByPk(corsoId);
    if (!corso) {
      throw new Error('Corso non trovato');
    }
    const updatedCorso = await corso.update(corsoData);
    const updatedCorsoJSON = updatedCorso.map(c => c.get({ plain: true }));
    return updatedCorsoJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Delete (D)
async function deleteCorso(corsoId) {
  try {
    const corso = await sequelize.models.Corso.findByPk(corsoId);
    if (!corso) {
      throw new Error('Corso non trovato');
    }
    await corso.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCorso,
  getCorsoById,
  updateCorso,
  deleteCorso,
  getAllRecords,
};
