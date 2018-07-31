// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  const splitNames = drivers.map( function(driver) { return driver.split(" ") } );
  return splitNames.map(function(splitName) { return {firstName: splitName[0], lastName: splitName[1]} })
}

function attributesToPhrase(drivers) {
  return drivers.map( function(driver) { return `${driver.name} is from ${driver.hometown}` })
}
