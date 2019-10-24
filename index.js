// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const firstNameOfDriver = driver.split(' ')[0];
    const lastNameOfDriver = driver.split(' ')[1];

    return { firstName: firstNameOfDriver, lastName: lastNameOfDriver };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
