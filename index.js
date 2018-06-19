// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(obj) {
  return obj.map(function (driver) {
    let names = driver.split(' ')
    return {firstName: names[0], lastName: names[1]}
  });
}

function attributesToPhrase(arr) {
  return arr.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
