// Code your solution in this file.
function lowerCaseDrivers(drivers) {

  x = drivers.map(function (driver) { return driver.toLowerCase();});
  return x;
}

function nameToAttributes(drivers) {

  x = drivers.map(function (driver) {
    split = driver.split(" ");
    newObj = {};
    newObj["firstName"] = split[0];
    newObj["lastName"] = split[1];
    return newObj;
  });
  return x;
}

function attributesToPhrase(drivers) {

  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
