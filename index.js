// Code your solution in this file.
function lowerCaseDrivers(drivers,string){
  return drivers.map(function(driverName){
    return driverName.toLowerCase();

  })

}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let arr = driver.split(" ");
    let obj = {}
    obj.firstName = arr[0]
    obj.lastName = arr[1]
    return obj
  })

}
function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })

}
