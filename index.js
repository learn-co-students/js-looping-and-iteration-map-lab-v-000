// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(i) {
    return i.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(i){
    return {firstName: `${i.split(' ')[0]}`, lastName: `${i.split(' ')[1]}`}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(i) {
    return `${i.name} is from ${i.hometown}`
  })
}
