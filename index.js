// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })
}

nameToAttributes = (drivers) => {
  return drivers.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return { firstName: firstName, lastName: lastName }
  })
}

attributesToPhrase = (drivers) => {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
