// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) { return driver.toLowerCase() })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const na = driver.split(" ")
    return Object.assign({}, {firstName: na[0], lastName: na[1]})
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver["name"]} is from ${driver["hometown"]}`
  })
}
