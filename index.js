// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(element) {
    return element.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let name = driver.split(" ")
    // let obj = {};
    // obj.firstName = name[0];
    // obj.lastName = name[1]
    // return obj
    return { firstName: name[0], lastName: name[1] }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })

}
