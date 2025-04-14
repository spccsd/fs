//Data.txt=
//This is an example data file used for Node.js streams.
//Stream.js=
const fs = require('fs');

const stream = fs.createReadStream('data.txt', 'utf8');

stream.on('data', (chunk) => {
  console.log("Received chunk:\n", chunk);
});

stream.on('end', () => {
  console.log("End of file reached.");
});
