// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  newArr = drivers.map(function (thing) {return thing.toLowerCase()})
  return newArr
}

function nameToAttributes(drivers) {
  return drivers.map (function (thing) {
      return {firstName: thing.split(" ")[0], lastName: thing.split(" ")[1]}
      //return Object.assign({}, {first_name: thing.split(" ")[0]}, {last_name: thing.split(" ")[1]})
  })
  //return newAr
}

function attributesToPhrase(drivers) {
  return drivers.map (function (driver){
      return `${driver.name} is from ${driver.hometown}`
  })
}
