// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newArray = [];
  for (const element of drivers) {
    newArray.push(element.toLowerCase())
  }
  return newArray;
}

function nameToAttributes(drivers) {
  fullNames = []
  for (const name of drivers) {
    var item = { firstName: name.split(' ')[0], lastName: name.split(' ')[1] };
    fullNames.push(item)
  }
  return fullNames;
}

function attributesToPhrase(drivers) {
  phrases = []
  for (const person of drivers) {
    let val = `${person.name} is from ${person.hometown}`
    phrases.push(val)
  }
  return phrases
}