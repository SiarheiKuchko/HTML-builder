const fs = require('fs');

process.stdout.write('Enter any text:\n');

process.stdin.on('data', function (data) {
  const writeData = data.toString().trim();
  if (writeData === 'exit') {
    process.exit();
  }
  fs.appendFile(__dirname + '/text.txt', writeData, (err) => {
    if (err) throw err;
  });
});

process.on('exit', () =>
  process.stdout.write('Closing the session. Goodbye!\n'),
);
