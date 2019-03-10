// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerCase = drivers.map(function(driver) { return driver.toLowerCase() });
    return lowerCase;
  }

function nameToAttributes(drivers) {
  const names = drivers.map(function(driverNames)
  {let driverFirstName = driverNames.split(" ")[0];
  let driverLastName = driverNames.split(" ")[1];
  return  { firstName: driverFirstName, lastName: driverLastName };
});
  return names;
}

function attributesToPhrase(drivers) {
    const attributes = drivers.map(function(driverPhrase)
    { return `${driverPhrase.name} is from ${driverPhrase.hometown}`; });
    return attributes;
}
