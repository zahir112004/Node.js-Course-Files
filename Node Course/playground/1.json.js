const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson)

data.name = 'Zahir'
data.age = 17

const dataJson2 = JSON.stringify(data)
const writeFile = fs.writeFileSync('1-json.json', dataJson2)