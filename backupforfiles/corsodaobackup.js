
// Operazione Create (C)
async function createCorso(corsoData) {
    try {
      const corso = await Corso.create(corsoData);
      return corso;
    } catch (error) {
      throw error;
    }
  }
  
  // Operazione Read (R)
  async function getCorsoById(corsoId) {
    try {
      const corso = await Corso.findOne({
                                          where: {
                                            id: corsoId,
                                          },
                                        });
      return corso;
    } catch (error) {
      throw error;
    }
  }
  
  async function getAllRecords() {
    try {
      console.log("corsodao before findall");
      const corsi = await Corso.findAll();
      console.log("corsodao after findall");
      return corsi;
    } catch (error) {
      console.log("corsodao findall error");
      throw error;
    }
  }
  
  // Operazione Update (U)
  async function updateCorso(corsoId, corsoData) {
    try {
      const corso = await Corso.findByPk(corsoId);
      if (!corso) {
        throw new Error('Corso non trovato');
      }
      const updatedCorso = await corso.update(corsoData);
      return updatedCorso;
    } catch (error) {
      throw error;
    }
  }
  
  // Operazione Delete (D)
  async function deleteCorso(corsoId) {
    try {
      const corso = await Corso.findByPk(corsoId);
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
  