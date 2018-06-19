// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driverName) {
    return driverName.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driverName) {
    const names = driverName.split(" ");
    return {firstName: names[0], lastName: names[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
