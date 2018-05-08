const siege = require('siege');

siege()
  .on(3001)
  .for(100000).times
  .get('http://localhost:3001/api/summary/948375')
  .attack()