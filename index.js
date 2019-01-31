// Code your solution in this file.
 function lowerCaseDrivers(drivers) {
   return drivers.map( function(driver) {return driver.toLowerCase();
   })
 }

 function nameToAttributes(drivers) {
   const newDrivers = drivers.map(function (driver) { return Object.assign({}, {firstName : driver.split(' ')[0], lastName : driver.split(' ')[1]})
   });
    return newDrivers;
  }

function attributesToPhrase(drivers) {
  const newDrivers = drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}`})
  return newDrivers;
}
