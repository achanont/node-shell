const checkPwd = require('./pwd.js');
const fs = require('fs');
const ls = require('./ls');

// Output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); //remove the newline
  checkPwd(cmd);
  ls(cmd);
});
