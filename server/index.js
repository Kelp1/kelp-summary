require('newrelic'); 
const cluster = require('cluster');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const redisClient = require('redis').createClient;
const redis = redisClient('redis://cache:6379');

const db = require('../database-mongo/restaurants.js');
const PORT = 3001;
const app = express();

app.use(cors());

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;

    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

} else {

  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.use(bodyParser.json());

  app.get('/api/summary/:id', (req, res) => {
    db.fetchInfo(redis, req.params.id, (result) => {
      if (result) {
        res.send(result);
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
   
}


