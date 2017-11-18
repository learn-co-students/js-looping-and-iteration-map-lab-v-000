function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    const name = driver.split(" ");
    return Object.assign({}, { firstName: name[0], lastName: name[1] });
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}