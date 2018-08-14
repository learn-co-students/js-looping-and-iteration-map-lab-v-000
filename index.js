// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function (drivername) {
    return drivername.toLowerCase()
  })
}

function nameToAttributes(list) {
    return list.map(function (driver) {
      const driver_firstname = driver.split(" ")[0]
      const driver_lastname = driver.split(" ")[1]
      return {firstName: driver_firstname, lastName: driver_lastname}
    })
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
