// Code your solution in this file.

function lowerCaseDrivers (drivers) {
  return drivers.map(function (driverName){
    return driverName.toLowerCase();
  });
}



function nameToAttributes (drivers) {
  return drivers.map(function (driver){
// Bobby Smith to {firstName: 'Bobby', lastName: 'Smith'}
// need to split the string at the space, then do  a first name and last name const
  const driverFirstName = driver.split(' ')[0];
  const driverLastName = driver.split(' ')[1];

  return { firstName: driverFirstName, lastName: driverLastName};
  });
}


function attributesToPhrase(drivers) {
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
