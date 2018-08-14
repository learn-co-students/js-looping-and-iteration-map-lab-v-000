// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
  let driversWithAttributes = drivers.map(function(driver){
    return Object.assign({}, {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]})
  });
  return driversWithAttributes
}

function attributesToPhrase(drivers){
  let driversAttributesToPhase = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });

return driversAttributesToPhase
}
