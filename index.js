function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map( function (driver) {
    return driver.toLowerCase();
  })
  return newDrivers
}

function nameToAttributes(names) {
  const newNames = names.map(function(name) {
    return Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
  })
  return newNames
}

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrase 
}
