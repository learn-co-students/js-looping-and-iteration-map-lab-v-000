// returns array of drivers names in lowercase
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) { return name.toLowerCase()})
}
//returns array of JS objects returns string for each obj.
function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    let splitName = name.split(' ');
    return { firstName: splitName[0], lastName: splitName[1] }
  });
}
//returns string for each object in array
function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
