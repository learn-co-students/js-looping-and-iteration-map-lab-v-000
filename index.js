// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (driver) {return driver.toLowerCase()});
}

function nameToAttributes(arr) {
  return arr.map(function (driver) {return {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]};});
}

function attributesToPhrase(arr) {
  return arr.map(function (driver) {return `${driver.name} is from ${driver.hometown}`});
}