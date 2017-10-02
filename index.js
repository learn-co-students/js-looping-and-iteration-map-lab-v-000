// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    var newDriver = driver.split(" ")
    return Object.assign({}, {}, {firstName: newDriver[0], lastName: newDriver[1]});
  })
}

function attributesToPhrase(drivers) {
  const hometownArray = drivers.map(function(driver) {
    return `${driver["name"]} is from ${driver["hometown"]}`
  })
  return hometownArray
}