// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  let driverArr = []
  drivers.map(driver => driverArr.push({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}))
  return driverArr
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
