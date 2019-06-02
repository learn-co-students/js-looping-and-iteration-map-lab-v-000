// Code your solution in this file.
function lowerCaseDrivers(employees) {
  return employees.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(employees) {
  return employees.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
      return { firstName: driverFirst, lastName: driverLast };
  });
}


function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
