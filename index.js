// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(driverNameToObject)
}

function driverNameToObject(driver) {
  let splitName = driver.split(" ")
  var driverObject = {firstName: splitName[0], lastName: splitName[1]}
  return driverObject
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`)
}
