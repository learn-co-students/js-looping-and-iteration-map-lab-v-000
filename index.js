function lowerCaseDrivers(drivers) {
  return drivers.map(dr => dr.toLowerCase());
}

function nameToAttributes (drivers) {
  return drivers.map(function(driver) {
    const nameArr = driver.split(" ");

    return { firstName: nameArr[0], lastName: nameArr[1] }
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}