const sequelize = require('../sequelize/sqlize');

// Operazione Create (C)
async function createSede(sedeData) {
  try {
    const sede = await sequelize.models.Sede.create(sedeData);
    const sedeJSON = sede.map(c => c.get({ plain: true }));
    return sedeJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Read (R)
async function getSedeById(sedeId) {
  try {
    const sede = await sequelize.models.Sede.findByPk(sedeId);
    const sedeJSON = sede.map(c => c.get({ plain: true }));
    return sedeJSON;
  } catch (error) {
    throw error;
  }
}

async function getAllRecords(){
  try {
    const sedi = await sequelize.models.Sede.findAll();
    const sediJSON = sedi.map(c => c.get({ plain: true }));
    return sediJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Update (U)
async function updateSede(sedeId, sedeData) {
  try {
    const sede = await sequelize.models.Sede.findByPk(sedeId);
    if (!sede) {
      throw new Error('Sede non trovata');
    }
    const updatedSede = await sequelize.models.Sede.update(sedeData);
    const updatedSedeJSON = updatedSede.map(c => c.get({ plain: true }));
    return updatedSedeJSON;
  } catch (error) {
    throw error;
  }
}

// Operazione Delete (D)
async function deleteSede(sedeId) {
  try {
    const sede = await sequelize.models.Sede.findByPk(sedeId);
    if (!sede) {
      throw new Error('Sede non trovata');
    }
    await sede.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createSede,
  getSedeById,
  updateSede,
  deleteSede,
  getAllRecords
};
