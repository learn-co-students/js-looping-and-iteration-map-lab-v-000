function lowerCaseDrivers(drivers) {
  const shortDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return shortDrivers
}

function nameToAttributes(drivers) {
  const objDrivers = drivers.map(function(driver) {return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})
  })
  return objDrivers
}

function attributesToPhrase(drivers) {
  const driverArray = drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`})
  return driverArray
}
