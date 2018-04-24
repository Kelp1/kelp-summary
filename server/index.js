const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../database/index.js');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/api/summary/:id', (req, res) => {
  db.fetchInfo({ id: req.params.id }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result[0]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
