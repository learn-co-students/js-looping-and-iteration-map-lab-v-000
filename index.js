function lowerCaseDrivers(drivers) {
  const newArrayDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return newArrayDrivers;
}

function nameToAttributes(drivers) {
  const newList = drivers.map(function(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});
  })
  return newList;
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
  return phrases;
}
