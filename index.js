// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let lowerCased = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return lowerCased;
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let driverNameSplit = driver.split(" ");
    let driversObj = { firstName: driverNameSplit[0], lastName: driverNameSplit[1]};
    return driversObj;
  })
}

function attributesToPhrase(drivers) {
  let phrased = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
  return phrased;
}
