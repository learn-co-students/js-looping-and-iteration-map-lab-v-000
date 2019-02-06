// Code your solution in this file.
function lowerCaseDrivers(driver){
   const drivers = [];
 const name = drivers.map(function(driver) { return driver.toLowerCase(); });
  return name;
}

function nameToAttributes(drivers) {
  const name = drivers.map(function(driver) { return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}); });
  return name;
}

function attributesToPhrase(drivers) {
  const sentences = drivers.map(function(driver) { return `${driver.name} is from ${driver.hometown}`; });
  return sentences;
}