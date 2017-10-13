const lowerCaseDrivers = (drivers) => {
  return drivers.map(function (driver) {return driver.toLowerCase();})
}

const nameToAttributes = (drivers) => {
  return drivers.map(function (driver) {
    nameSplit = driver.split(' ')
    return {firstName: nameSplit[0], lastName: nameSplit[1]};
  });
}

const attributesToPhrase = (drivers) => {
  return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`});
}
