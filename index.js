// Code your solution in this file.
function lowerCaseDrivers(names) {
  return names.map(function(driver) {
    return driver.toLowerCase();
  });
}
 function nameToAttributes(names) {
  return names.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
     return {firstName: driverFirst, lastName: driverLast};
  });
}
 function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
