// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) { return driver.toLowerCase() });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const nameArray = driver.split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray[1];
    return { firstName: firstName, lastName: lastName};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
