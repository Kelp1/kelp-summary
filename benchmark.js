const siege = require('siege');

siege()
  .concurrent(800)
  .on(3001)
  .for(1000000).times
  .get('http://localhost:3001/api/summary/948375')
  .attack()