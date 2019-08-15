// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let driverArr = driver.split(" ")
    return Object.assign({}, {firstName: driverArr[0]}, {lastName: driverArr[1]})
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver_obj) {
    return `${driver_obj.name} is from ${driver_obj.hometown}`
  })
}
