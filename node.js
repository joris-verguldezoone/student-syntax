const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/echo', (req, res) => {
  const message = req.body.message;
  res.json({ echo: message });
});

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Bonjour, ${name} !` });
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Ressource introuvable' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
