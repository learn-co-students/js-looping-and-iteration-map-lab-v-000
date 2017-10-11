// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  return drivers.map(driver => driver.toLowerCase());
}

nameToAttributes = (drivers) => {
  return drivers.map(driver => {
    let driverArray = driver.split(' ');
    return {firstName: driverArray[0], lastName: driverArray[1]};
  })
}

attributesToPhrase = (drivers) => {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
