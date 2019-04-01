// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
      return driver.toLowerCase()
    });
    return newDrivers
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driverFirstName = driver.split(' ')[0];
    const driverLastName = driver.split(' ')[1];

    return { firstName: driverFirstName, lastName: driverLastName };
  });
}


function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
  const firstName = driver.name
  const homeTown = driver.hometown

    return  `${driver.name} is from ${driver.hometown}`;
  });
}
