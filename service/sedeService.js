// Importa il modulo o la classe del DAO appropriato per Sede
const sedeDAO = require('../dao/sedeDAO');

async function findAll() {
  return await sedeDAO.getAllRecords();
}

async function fetchBy(id) {
  return await sedeDAO.getCorsoById(id);
}

async function create(sedeData) {
  return await sedeDAO.save(sedeData);
}

async function update(id, updatedData) {
  return await sedeDAO.update(id, updatedData);
}

async function remove(id) {
  return await sedeDAO.delete(id);
}

module.exports = {
  findAll,
  fetchBy,
  create,
  update,
  remove,
};