const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/einfache-aufgabenverwaltung', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Datenbank verbunden');
}).catch((err) => {
  console.error('Datenbankverbindung fehlgeschlagen', err);
});

app.get('/', (req, res) => {
  res.send('Willkommen zur einfachen Aufgabenverwaltung!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
