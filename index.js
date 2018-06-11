// Code your solution in this file.


function lowerCaseDrivers(drivers){
  const lowerCaseDrivers = drivers.map(driver => (driver.toLowerCase()));

  return lowerCaseDrivers
}

function nameToAttributes(drivers){
  const objectDrivers = drivers.map(driver =>(Object.assign({}, {
    firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]
  })));

  return objectDrivers;
}


function attributesToPhrase(drivers){
  const driverPhrase = drivers.map(driver => (
    `${driver.name} is from ${driver.hometown}`
  ));

  return driverPhrase
}
