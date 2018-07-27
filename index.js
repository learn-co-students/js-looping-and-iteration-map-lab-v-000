// Code your solution in this file.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function lowerCaseDrivers (drivers){
  return drivers.map(function (name) {
    return name.toLowerCase();
  })
}

console.log(lowerCaseDrivers(drivers));

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const newArr = driver.split(" ");
    return Object.assign({firstName: newArr[0], lastName: newArr[1]})
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
