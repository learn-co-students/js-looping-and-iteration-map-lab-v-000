// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
    return Object.assign({}, { firstName: d.split(" ")[0], lastName: d.split(" ")[1] })
  })
}

function attributesToPhrase(drivers){
  arr = []
  drivers.map(function(driver){
    arr.push(`${driver.name} is from ${driver.hometown}`)
  })
  return arr
}