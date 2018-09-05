// Code your solution in this file.

 // takes an array of drivers, and returns an array of the drivers names in lowercase
function lowerCaseDrivers(drivers) {
  return drivers.map(drivers => drivers.toLowerCase())
}

//  takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

function nameToAttributes (fullName) {
  return fullName.map(function (driver) {
    return { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] }
  })
}

// takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array.

// solution#1 refactored
function attributesToPhrase (driverInfo) {
  return driverInfo.map(driver => `${driver.name} is from ${driver.hometown}`)
}

// solution#1 passes
// function attributesToPhrase (driverInfo) {
//   return driverInfo.map(function (driver) {
//     const phrase = `is from`
//     return (`${driver.name} ${phrase} ${driver.hometown}`)
//   })
// }
