const checkPwd = require('./pwd.js');

// Output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) => {
  checkPwd(data)
});
