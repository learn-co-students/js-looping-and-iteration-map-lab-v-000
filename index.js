// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const first_name = driver.split(" ")[0];
    const last_name = driver.split(" ")[1];
    return {firstName: first_name, lastName: last_name};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
