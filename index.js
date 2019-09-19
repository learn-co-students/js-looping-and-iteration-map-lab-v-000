// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driverName => driverName.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(fullDriverName => {
    [firstName, lastName] = fullDriverName.split(" ")
    return {firstName, lastName}
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}