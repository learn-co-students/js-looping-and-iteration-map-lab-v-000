function lowerCaseDrivers(drivers) {
    return drivers.map(function (newDriver){return newDriver.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    const fn = name.split(' ')[0]
    const ln = name.split(' ')[1]
    return {
      firstName: fn,
      lastName: ln
    }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (eachDriver) {
    return `${eachDriver.name} is from ${eachDriver.hometown}`
  })
}