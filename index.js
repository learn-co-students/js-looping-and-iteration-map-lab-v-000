function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes (drivers) {
  return drivers.map(function (fullName) {
    const forename = fullName.split(" ")[0];
    const surname = fullName.split(" ")[1];
    return { firstName: forename, lastName: surname };
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(function (driverObject) {
    return `${driverObject.name} is from ${driverObject.hometown}`;
  });
}
