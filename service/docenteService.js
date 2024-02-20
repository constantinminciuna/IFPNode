// Importa il modulo o la classe del DAO appropriato per docente
const docenteDAO = require('../dao/docenteDAO');

async function findAll() {
  return await docenteDAO.getAllRecords();
}

async function fetchBy(id) {
  return await docenteDAO.getCorsoById(id);
}

async function create(docenteData) {
  return await docenteDAO.save(docenteData);
}

async function update(id, updatedData) {
  return await docenteDAO.update(id, updatedData);
}

async function remove(id) {
  return await docenteDAO.delete(id);
}

module.exports = {
  findAll,
  fetchBy,
  create,
  update,
  remove,
};