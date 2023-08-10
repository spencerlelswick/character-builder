require('dotenv').config()
require('./database')

const Character = require('../models/character')

function createChar(data) {
  Character.create(data)
    .then(newChar => console.log(newChar))
    .catch(err => console.log(err))
}


function deleteChars() {
  Character.deleteMany({})
    .then(newChar => console.log(newChar))
    .catch(err => console.log(err))
}


const testData = {
  name: 'dwarfozia',
  race: 'dwarf',
  charClass: 'warrior',
}

console.log('trying to create character')

deleteChars()
