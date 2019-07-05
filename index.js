// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function (driver) { return driver.toLowerCase() });
  return newDrivers
};

function nameToAttributes(drivers) {
  const newArray = []
  drivers.map(function (driver) {
    const newDriver =  driver.split(" ");
    newArray.push({firstName: newDriver[0], lastName: newDriver[1]})
  });
  return newArray
}

function attributesToPhrase(drivers) {
  const newArray = []
  drivers.map(function (driver) { newArray.push(`${driver.name} is from ${driver.hometown}` )})
  return newArray
}
