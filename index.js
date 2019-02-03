function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  function splitName(name){
    return name.split(' ')
  }
  function toObject(name){
    return {
      firstName: splitName(name)[0],
      lastName: splitName(name)[1]
    }
  }

  return drivers.map(driver => toObject(driver))
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
