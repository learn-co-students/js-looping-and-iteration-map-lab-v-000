// Code your solution in this file.

function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    const driverAttributes = {}
    const driverNames = driver.split(" ");
    driverAttributes.firstName = driverNames[0];
    driverAttributes.lastName = driverNames[1];
    return driverAttributes;
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
