// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let first = driver.split(" ")[0];
    let last = driver.split(" ")[1];
    return {firstName: first, lastName: last}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}