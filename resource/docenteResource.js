const express = require('express');
const router = express.Router();
const DocenteService = require('../service/docenteService'); // Importa il tuo modulo di servizio Docente

// Rotta per ottenere tutte le docenti
router.get('/docenti', async (req, res) => {
  try {
    const docenti = await DocenteService.findAll();
    res.status(200).json(docenti);
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la ricerca delle docenti.' });
  }
});

// Rotta per ottenere una docente per ID
router.get('/docenti/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const docente = await DocenteService.fetchBy(id);
    res.status(200).json(docente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rotta per creare una docente
router.post('/docenti', async (req, res) => {
  const nuovoDocente = req.body;

  try {
    const success = await DocenteService.create(nuovoDocente);
    if (success) {
      res.status(201).json({ message: 'Docente creata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante la creazione della docente.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la creazione della docente.' });
  }
});

// Rotta per aggiornare una docente
router.put('/docenti/:id', async (req, res) => {
  const id = req.params.id;
  const docenteDaAggiornare = req.body;

  try {
    const success = await DocenteService.update(id, docenteDaAggiornare);
    if (success) {
      res.status(200).json({ message: 'Docente aggiornata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'aggiornamento della docente.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'aggiornamento della docente.' });
  }
});

// Rotta per eliminare una docente
router.delete('/docenti/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const success = await DocenteService.deleteById(id);
    if (success) {
      res.status(200).json({ message: 'Docente eliminata con successo.' });
    } else {
      res.status(500).json({ error: 'Errore durante l\'eliminazione della docente.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Errore durante l\'eliminazione della docente.' });
  }
});

module.exports = router;
