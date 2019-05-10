// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(names){
  return names.map(function(name){
    const seperate = name.split(" ")
    return { firstName:seperate[0], lastName:seperate[1] }
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){return `${driver.name} is from ${driver.hometown}`})
}