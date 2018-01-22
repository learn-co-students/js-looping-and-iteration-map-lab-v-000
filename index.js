// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  lowDrivers = drivers.map(function (driver) { return driver.toLowerCase(); });
  return lowDrivers
}

function nameToAttributes(drivers) {
  let driversByName = drivers.map(function (name) { let namesSplit = name.split(" ");
  return {'firstName': namesSplit[0], 'lastName': namesSplit[1]};  });
  return driversByName
}

function attributesToPhrase(drivers) {
  let driverHomeTown = drivers.map(function (nameTown) {return `${nameTown['name']} is from ${nameTown['hometown']}`});
  return driverHomeTown
}
