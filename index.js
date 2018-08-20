// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];
    return Object.assign({}, name, {firstName: driverFirstName, lastName: driverLastName})
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    const driverName = driver.name;
    const driverHometown = driver.hometown;
    return `${driverName} is from ${driverHometown}`
  })
}
