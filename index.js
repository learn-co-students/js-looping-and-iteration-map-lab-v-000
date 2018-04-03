function lowerCaseDrivers(drivers) {
  const lowerCased = drivers.map(driver => driver.toLowerCase());
  return lowerCased;
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
