function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  return newDrivers
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return {firstName: first, lastName: last}
  })
}

function attributesToPhrase(drivers) {
  return driverHometowns = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}