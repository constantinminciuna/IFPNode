const express = require('express');
const router = express.Router();
const SedeService = require('../service/sedeService'); // Importa il tuo modulo di servizio Sede

// Rotta per ottenere tutte le sedi
router.get('/sedi', async (req, res) => {
  try {
    const sedi = await SedeService.findAll();
    res.status(200).json(sedi);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la ricerca delle sedi.' });
  }
});

// Rotta per ottenere una sede per ID
router.get('/sedi/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const sede = await SedeService.fetchBy(id);
    res.status(200).json(sede);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rotta per creare una sede
router.post('/sedi', async (req, res) => {
  const nuovaSede = req.body;

  try {
    const success = await SedeService.create(nuovaSede);
    if (success) {
      res.status(201).json({ message: 'Sede creata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante la creazione della sede.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la creazione della sede.' });
  }
});

// Rotta per aggiornare una sede
router.put('/sedi/:id', async (req, res) => {
  const id = req.params.id;
  const sedeDaAggiornare = req.body;

  try {
    const success = await SedeService.update(id, sedeDaAggiornare);
    if (success) {
      res.status(200).json({ message: 'Sede aggiornata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'aggiornamento della sede.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'aggiornamento della sede.' });
  }
});

// Rotta per eliminare una sede
router.delete('/sedi/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const success = await SedeService.deleteById(id);
    if (success) {
      res.status(200).json({ message: 'Sede eliminata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'eliminazione della sede.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'eliminazione della sede.' });
  }
});

module.exports = router;
