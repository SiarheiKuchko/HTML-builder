const fs = require('fs');

const stream = new fs.ReadStream('./01-read-file/text.txt', 'utf8');

stream.on('readable', function () {
  let data = stream.read();
  console.log(data);
});

stream.on('end', function () {
  console.log('THE END');
});

stream.on('error', function (err) {
  if (err.code === 'ENOENT') {
    console.log('Файл не найден');
  } else {
    console.error(err);
  }
});
