var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();
fs.writeFileSync('test', file);

var fileArray = file.split('\n');

console.log(fileArray.length - 1);

// This example is misleading and actualy useless.
// Instead of '... print the number of newlines it contains ...' should be '... print the number of lines in the file ...'