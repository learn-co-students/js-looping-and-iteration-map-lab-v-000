// Code your solution in this file.
const drivers = ["Ray", "Ana", "Dan"];
const oDrivers = ["Ray Charles", "Dan Man", "Ana Banana"]

function lowerCaseDrivers(drivers){
let  newDriver = drivers.map(function(driver){
    return driver.toLowerCase()
  })
  return newDriver
}
// newest = newDrivers.map(function(driver){return Object.assign({}, { firstName: driver[0], lastName: driver[1] }) })
theDrivers = [
  {name: "James", hometown: "Chicago"},
  {name: "Dee", hometown: "New York"}

]

function attributesToPhrase(theDrivers){
  sentences = theDrivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return sentences
}

function nameToAttributes(oDrivers){
 let newDrivers = oDrivers.map(function(driver){ return driver.split(" ")})
return newest = newDrivers.map(function(driver){return Object.assign({}, { firstName: driver[0], lastName: driver[1] })
  })}
