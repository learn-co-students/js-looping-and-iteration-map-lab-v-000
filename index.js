function lowerCaseDrivers(drivers){
  //returns all drivers lowercased
  //does not modify the original array
  return drivers.map(function (driver) { return driver.toLowerCase();});
}

function nameToAttributes (drivers) {
  //returns list of objects with appropriate first and last names
  return drivers.map(function (driver) {
    const splitName=driver.split(" ");
    return {firstName: splitName[0], lastName: splitName[1]};
  });
}


function attributesToPhrase(drivers){
  //converts to list saying the name and where each individual is from
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
