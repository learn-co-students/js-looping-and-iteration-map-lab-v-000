// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function(driver){
    return driver.toLowerCase();
  });
  return newDrivers;
}

function nameToAttributes(drivers){
  const newDrivers = drivers.map(function(driver){
    const splitDriver = driver.split(' ');
    return {firstName: splitDriver[0], lastName: splitDriver[1]};
  })
  return newDrivers;
}

function attributesToPhrase(drivers){
  const driverDetails = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
  return driverDetails;
}
