// Code your solution in this file.
function lowerCaseDrivers(array) {
  const lower = array.map( i => i.toLowerCase());
  return lower
}

function nameToAttributes(array) {
  const names = array.map( i => Object.assign({firstName: i.split(" ")[0]}, {lastName: i.split(" ")[1]}))
  return names
}

function attributesToPhrase(array) {
  const phrases = array.map( i => `${i.name} is from ${i.hometown}`)
  return phrases
}
