// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => { return driver.toLowerCase() })
}

function nameToAttributes(drivers) {
  return drivers.map((driver) => {
    return Object.assign({}, { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1] })
  })
}

function attributesToPhrase(drivers) {
  return drivers.map((driver) => {
    return `${driver.name} is from ${driver.hometown}`
  })
}