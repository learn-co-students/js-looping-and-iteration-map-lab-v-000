// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    const dFirstName = driver.split(' ')[0];
    const dLastName = driver.split(' ')[1];

    return { firstName: dFirstName, lastName: dLastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;

  });

}
