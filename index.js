function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return newDrivers;
}

function nameToAttributes(drivers) {
  const fullNames = drivers.map(function(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]});
  });
  return fullNames;
}

function attributesToPhrase(drivers) {
  const driverHometowns = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
  return driverHometowns;
}
