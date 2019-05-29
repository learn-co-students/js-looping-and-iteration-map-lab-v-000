// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return lowerDrivers
}

function nameToAttributes(drivers) {
  return (drivers.map(function(driver) {
      driver = driver.split(" ")
  return  {  firstName:driver[0], lastName:driver[1]}
  }))

}

function attributesToPhrase(drivers) {
  const intro = drivers.map(function(driver) {
     return `${driver['name']} is from ${driver['hometown']}`
  })
  return intro
}
