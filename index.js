// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(names){
  return names.map(name =>{
    let object = {};
    object.firstName = name.split(" ")[0]
    object.lastName = name.split(" ")[1]
    return object
  })
}

function attributesToPhrase(drivers){
  return drivers.map(driver =>{
    return driver.name + " is from " + driver.hometown;
  })
}
