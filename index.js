// Code your solution in this file.
function lowerCaseDrivers(drivers,string){
  return drivers.map(function(driverName){
    return driverName.toLowerCase();

  })

}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let arr = driver.split(" ");
    return let obj = Object.new(firstName: arr[0], lastName: arr[1]}

  })

}
function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })

}
