// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(collection) {
  return collection.map(function(driver) {
    const nameFirst = driver.split(' ')[0];
    const nameLast = driver.split(' ')[1];

    return { firstName: nameFirst, lastName: nameLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
