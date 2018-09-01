// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver) {
    object = {};
    object["firstName"] = driver.split(" ")[0];
    object["lastName"] = driver.split(" ")[1];
    return object;
  })
}
function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
