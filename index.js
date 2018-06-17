// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers) {
  let fullNames = []
  for (const name of drivers) {
    fullNames.push(name.split(' '))
  }
  return fullNames.map(function (driver) {
    return driver = {firstName: driver[0], lastName: driver[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map( function (driver) {
    return `${driver['name']} is from ${driver['hometown']}`
  })
}
