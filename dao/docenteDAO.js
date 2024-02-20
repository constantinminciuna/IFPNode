const sequelize = require('../sequelize/sqlize');

// Operazione Create (C)
async function createDocente(docenteData) {
  try {
    const docente = await sequelize.models.Docente.create(docenteData);
    const docenteJSON = docente.map(c => c.get({ plain: true }));
    return docenteJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Read (R)
async function getDocenteById(docenteId) {
  try {
    const docente = await sequelize.models.Docente.findByPk(docenteId);
    const docenteJSON = docente.map(c => c.get({ plain: true }));
    return docenteJSON;
  } catch (error) {
    throw error;
  }
}

async function getAllRecords(){
  try {
    const docenti = await sequelize.models.Docente.findAll();
    const docentiJSON = docenti.map(c => c.get({ plain: true }));
    return docentiJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Update (U)
async function updateDocente(docenteId, docenteData) {
  try {
    const docente = await sequelize.models.Docente.findByPk(docenteId);
    if (!docente) {
      throw new Error('Docente non trovato');
    }
    const updatedDocente = await sequelize.models.Docente.update(docenteData);
    const updatedDocenteJSON = updatedDocente.map(c => c.get({ plain: true }));
    return updatedDocenteJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Delete (D)
async function deleteDocente(docenteId) {
  try {
    const docente = await sequelize.models.ocente.findByPk(docenteId);
    if (!docente) {
      throw new Error('Docente non trovato');
    }
    await docente.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDocente,
  getDocenteById,
  updateDocente,
  deleteDocente,
  getAllRecords
};
