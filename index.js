// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) { return driver.toLowerCase();});
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) { 
    return Object.assign({}, driver.split(" ")[-1], {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});
  });
}

function attributesToPhrase(drivers) {

}