function lowerCaseDrivers(drivers) {
  return drivers.map( function(driver) { return driver.toLowerCase(); } );
}
function nameToAttributes(drivers) {
  return drivers.map( function (driver) {
    const driver_array = driver.split(' ');
    const obj = { firstName: driver_array[0], lastName: driver_array[1] };
    return obj;
  });
}
function attributesToPhrase(drivers) {
  return drivers.map( function (driver) { return driver.name + ' is from ' + driver.hometown; });
}
