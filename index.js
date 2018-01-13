// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return lowerDrivers
}

function nameToAttributes(drivers) {
  const names = []
  (drivers.map(function(driver) {
    driver = driver.split(" ")
    debugger
    names['firstName'] =  driver[0]
    name['lastname'] =  driver[1]

  }))
  return names
}

function attributesToPhrase(drivers) {
  const intro = drivers.map(function(driver) {
     return `${driver['name']} is from ${driver['hometown']}`
  })
  return intro
}
