// take an array of drivers and return an array of the drivers' names in lowercase
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return newDrivers;
};

// take an array of drivers with their first and last names
// separated by a space and return an array of objects with
// firstName and lastName attributes
function nameToAttributes(drivers) {
  const driversObject = drivers.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName: firstName, lastName: lastName};
  });
  return driversObject;
};

// take an array of drivers as objects
// and return a string
function attributesToPhrase(drivers) {
  const phrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrase;
};
