// Code your solution in this file.
function  lowerCaseDrivers(drivers) {
  debugger
  return drivers.map (function(driversName){
  return driversName.toLowerCase()
  debugger })
}

function nameToAttributes (drivers) {
  return drivers.map(function (drivername) {
    const driverFirst = drivername.split(' ')[0];
    const driverLast = drivername.split(' ')[1];
    return { firstName: driverFirst, lastName: driverLast };
  });

}


function attributesToPhrase(drivers) {
  return drivers.map(function (driverElement) {
  return  `${driverElement.name} is from ${driverElement.hometown}` ;
  });

}
