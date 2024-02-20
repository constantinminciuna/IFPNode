const express = require('express');
const router = express.Router();
const CorsoService = require('../service/corsoService'); // Importa il tuo modulo di servizio Corso

// Rotta per ottenere tutte le corsi
router.get('/corsi', async (req, res) => {
  try {
    const corsi = await CorsoService.findAll();
    res.status(200).json(corsi);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la ricerca dei corsi.' });
  }
});

// Rotta per ottenere una corso per ID
router.get('/corsi/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const corso = await CorsoService.fetchBy(id);
    res.status(200).json(corso);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rotta per creare una corso
router.post('/corsi', async (req, res) => {
  const nuovoCorso = req.body;

  try {
    const success = await CorsoService.create(nuovoCorso);
    if (success) {
      res.status(201).json({ message: 'Corso creata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante la creazione della corso.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la creazione della corso.' });
  }
});

// Rotta per aggiornare una corso
router.put('/corsi/:id', async (req, res) => {
  const id = req.params.id;
  const corsoDaAggiornare = req.body;

  try {
    const success = await CorsoService.update(id, corsoDaAggiornare);
    if (success) {
      res.status(200).json({ message: 'Corso aggiornata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'aggiornamento della corso.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'aggiornamento della corso.' });
  }
});

// Rotta per eliminare una corso
router.delete('/corsi/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const success = await CorsoService.deleteById(id);
    if (success) {
      res.status(200).json({ message: 'Corso eliminata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'eliminazione della corso.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'eliminazione della corso.' });
  }
});

module.exports = router;
