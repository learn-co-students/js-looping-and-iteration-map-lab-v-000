// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(x => x.toLowerCase())
}

function nameToAttributes(array) {
  return array.map(driverNameToAttributes)
}

function attributesToPhrase(array) {
  return array.map(driverAttributesToPhrase)
}

function driverNameToAttributes(driver) {
  returnObject = {}
  nameArray = driver.split(" ")
  returnObject['firstName'] = nameArray[0]
  returnObject['lastName'] = nameArray[1]
  return returnObject
}

function driverAttributesToPhrase(driver) {
  return `${driver.name} is from ${driver.hometown}`
}
