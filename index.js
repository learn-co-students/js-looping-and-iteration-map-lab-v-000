function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) { return driver.toLowerCase();});
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    const splitName=driver.split(" ");
    return {firstName: splitName[0], lastName: splitName[1]};
     });
}


function attributesToPhrase(drivers){
return drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}`;});
}
