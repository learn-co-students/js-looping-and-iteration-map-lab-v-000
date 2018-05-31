// Code your solution in this file.
const drivers = [];

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver){
    const first= driver.split(' ')[0];
    const last = driver.split(' ')[1];
    return {firstName: first, lastName: last};
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver){
    const name = driver.name;
    const hometown = driver.hometown;
    return `${name} is from ${hometown}`;
  })
}
