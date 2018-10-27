// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) { return name.toLowerCase(); });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    let firstName = name.split(" ")[0];
    let lastName = name.split(" ")[1];

    let driverObj = {};

    driverObj.firstName = firstName;
    driverObj.lastName = lastName;

    return driverObj;
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
