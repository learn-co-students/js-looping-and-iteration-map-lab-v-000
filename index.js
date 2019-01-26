function lowerCaseDrivers(drivers) {
  const driversLowCase = [];
  drivers.map(function(driver) {
    driversLowCase.push(driver.toLowerCase());
  });
  return driversLowCase;
}

function nameToAttributes(names) {
  const toAttributes = names.map(function(name) {
    const nameArray = name.split(" ");
    return Object.assign({}, {firstName: nameArray[0], lastName: nameArray[1]});
  });
  return toAttributes;
}

function attributesToPhrase(drivers) {
  const toPhrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
    //console.log(driver.name, 'is from', driver.hometown);
  });
  return toPhrase;
}
