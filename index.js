// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase();})
}

function nameToAttributes (drivers) {
  return drivers.map(
    function (fullName) {
      const splitName = fullName.split(' ');
      const first = splitName[0];
      const last = splitName[1];

      return Object.assign({}, {firstName: first, lastName: last});

    });
}
function attributesToPhrase (drivers) {
  return drivers.map(
    function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
