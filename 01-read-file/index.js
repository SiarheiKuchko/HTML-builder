const fs = require('fs');

const readStream = new fs.createReadStream(__dirname + '/text.txt', 'utf8');

readStream.on('readable', function () {
  let data = readStream.read();
  if (data !== null) {
    console.log(data);
  }
});
