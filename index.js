// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (driverName) { return driverName.toLowerCase()})
}

function nameToAttributes(array) {
  return array.map(function (driverName) { return Object.assign( {}, {firstName: driverName.split(' ')[0], lastName: driverName.split(' ')[1]} );
});
}

function attributesToPhrase(array) {
  return array.map(function (driver) { return `${driver.name} is from ${driver.hometown}`});
}
