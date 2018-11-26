// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(driver){
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];
    return { firstName: driverFirstName, lastName: driverLastName };
    // return '${driver.name}';
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
