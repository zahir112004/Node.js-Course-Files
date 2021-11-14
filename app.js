const fs = require('fs')

fs.writeFileSync('notes.txt', 'This is my name.')
fs.appendFileSync('notes.txt', ' Hello World')