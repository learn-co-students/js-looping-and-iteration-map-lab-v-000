// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  lowerDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return lowerDrivers
}


function nameToAttributes(drivers){
  firstAndLastNames = drivers.map(function(driver) {
    nameArray = driver.split(" ");
   return { firstName: nameArray[0], lastName: nameArray[1] };
  })
  return firstAndLastNames
}

function attributesToPhrase(drivers){
  phrases = drivers.map(function(driverObj) {
    return `${driverObj.name} is from ${driverObj.hometown}`;
  })
  return phrases
}
