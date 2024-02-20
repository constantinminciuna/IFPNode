const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Abilita CORS per tutte le route
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Collega il router delle sedi al server principale
const sedeRouter = require('./resource/sedeResource');
app.use('/api', sedeRouter);

// Collega il router dei docenti al server principale
const docenteRouter = require('./resource/docenteResource');
app.use('/api', docenteRouter);

// Collega il router dei corsi al server principale
const corsoRouter = require('./resource/corsoResource');
app.use('/api', corsoRouter);

// ...

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

//corsi: http://localhost:3000/api/corsi
//sedi: http://localhost:3000/api/sedi
//docenti: http://localhost:3000/api/docenti