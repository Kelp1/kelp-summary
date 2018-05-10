require('newrelic'); 
const cluster = require('cluster');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');

const db = require('../database-mongo/restaurants.js');
const PORT = 3001;
const app = express();

if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

} else {

  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/api/summary/:id', (req, res) => {
    db.fetchInfo(redis, req.params.id, (result) => {
      if (result) {
        res.send(result);
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
   
}


