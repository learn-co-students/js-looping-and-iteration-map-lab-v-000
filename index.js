// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){return driver.toLowerCase()})
}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const nameAry = driver.split(" ")
    return {firstName: nameAry[0], lastName: nameAry[1]}})
}
function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  }

  )
}
