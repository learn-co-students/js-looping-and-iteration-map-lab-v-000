// Code your solution in this file.
function lowerCaseDrivers (driverArray) {
  return driverArray.map( item => item.toLowerCase());
}

function nameToAttributes (driverArray) {
  return driverArray.map(driver => Object.assign({}, {
    firstName: driver.split(" ")[0],
    lastName: driver.split(" ")[1]
  }))
}

function attributesToPhrase (driverArray) {
  return driverArray.map(driver => `${driver.name} is from ${driver.hometown}`);
}
