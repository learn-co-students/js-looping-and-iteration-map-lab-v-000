function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    var nameSplit = driver.split(" ");
    const fullName = Object.assign({firstName: nameSplit[0], lastName: nameSplit[1]});
    return fullName; });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;})
}

