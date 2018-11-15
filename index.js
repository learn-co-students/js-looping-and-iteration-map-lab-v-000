// Code your solution in this file.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  })
}

const driver = ['Bobby Smith', 'Sammy Watkins','Sally Jenkins','Annette Sawyer']

function nameToAttributes(drivers){
  return drivers.map(function(driver) {
    var array = driver.split(' ');
    return driver = { firstName: array[0], lastName: array[1] }
})
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return driver.name +" is from " + driver.hometown;
  })
}
