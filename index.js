// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}
function nameToAttributes(drivers) {
  const splitDrivers = drivers.map(driver => driver.split(" "));
  return splitDrivers.map(driver => Object.assign({}, {firstName: driver[0], lastName: driver[1]}));
}
function attributesToPhrase(drivers) {
  return (drivers.map(driver => driver.name + " " + 'is from' + " " + driver.hometown));
}
