// Importa il modulo o la classe del DAO appropriato per Corso
const corsoDAO = require('../dao/corsoDAO');

async function findAll() {
  return await corsoDAO.getAllRecords();
}

async function fetchBy(id) {
  return await corsoDAO.getCorsoById(id);
}

async function create(corsoData) {
  return await corsoDAO.save(corsoData);
}

async function update(id, updatedData) {
  return await corsoDAO.update(id, updatedData);
}

async function remove(id) {
  return await corsoDAO.delete(id);
}

module.exports = {
  findAll,
  fetchBy,
  create,
  update,
  remove,
};