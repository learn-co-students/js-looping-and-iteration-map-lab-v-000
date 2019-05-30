// Code your solution in this file.
function lowerCaseDrivers(name){
return name.map(function(driver){
  return driver.toLowerCase();
});
}

function nameToAttributes (drivers) {
  return drivers.map( function (driver) {
    names = driver.split(" ")
    return {firstName: names[0], lastName: names[1]}
  })
}

function attributesToPhrase (drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
