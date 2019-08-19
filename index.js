// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const changedDrivers = drivers.map( (driver) => driver.toLowerCase());
  return changedDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map( function(dri) {
    return {firstName: dri.split(" ")[0], lastName: dri.split(" ")[1]};
  });
}

function attributesToPhrase(drivers) {
  const sayings = [];
  drivers.map(function (driver) {
    sayings.push(`${driver.name} is from ${driver.hometown}`);
  });
  return sayings;
}
