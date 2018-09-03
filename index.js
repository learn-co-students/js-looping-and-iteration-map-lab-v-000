// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
      return driver.toLowerCase();
  });
}

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];
function nameToAttributes(drivers) {
  return drivers.map(function (driver){
    const driverFirstName = driver.split(' ')[0]
    const driverLastName = driver.split(' ')[1]

    return {firstName: driverFirstName, lastName: driverLastName }
  });

}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
