// Code your solution in this file.

// driver => driver.toLowerCase()

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    const nombre = driver.split(" ")[0]
    const apellido = driver.split(" ")[1]

    return { firstName: nombre, lastName: apellido}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
