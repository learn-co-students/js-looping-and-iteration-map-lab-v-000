function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  });
};

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    arr = driver.split(" ")
    return {firstName: arr[0], lastName: arr[1]};
  });
};

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
