// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  let lowercasedrivers = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return lowercasedrivers
}

function nameToAttributes(drivers) {
  let driversObjectsArray = []
  drivers.map(function(driver) {
    let driverObject = {}
    let driverSplit = driver.split(" ")
    driverObject.firstName = driverSplit[0]
    driverObject.lastName = driverSplit[1]
    driversObjectsArray.push(driverObject)
  })
  return driversObjectsArray
}

function attributesToPhrase(drivers) {
  let phrase = []
  drivers.map(function(driver) {
    return phrase.push(`${driver.name} is from ${driver.hometown}`)
  })
  return phrase
}
