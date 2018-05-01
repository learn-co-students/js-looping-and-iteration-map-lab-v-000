// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverNameFirst = driver.split(" ")[0];
    const driverNameLast = driver.split(" ")[1];
    return { firstName: driverNameFirst, lastName: driverNameLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
