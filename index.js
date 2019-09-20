// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return lowerDrivers= drivers.map(function (driver){return driver.toLowerCase()})
}
function nameToAttributes(drivers){
  return drivers.map (function (driver){
    array= driver.split(" ")
    const newDrivers= Object.assign({}, {firstName:array[0],lastName:array[1]})
    return newDrivers
  })
}
// drivers= [{name:"bob",hometown: "towson"},etc]
function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
