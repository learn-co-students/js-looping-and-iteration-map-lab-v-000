function lowerCaseDrivers (drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes (drivers) {
  return drivers.map(function (name) {
    const fullName = name.split(" ");
    return {firstName: fullName[0], lastName: fullName[1]};
  })
}

function attributesToPhrase (drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}
