// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return {firstName: driverFirst, lastName: driverLast};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    const driverName = driver.name;
    const driverHometown = driver.hometown;

    return `${driverName} is from ${driverHometown}`;
  });
}
