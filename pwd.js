
function checkPwd (data) {
  const cmd = data.toString().trim(); //remove the newline
    if (cmd === 'pwd') {
    process.stdout.write(process.cwd())
    process.stdout.write('\nprompt > ');
  }
}
module.exports = checkPwd;
