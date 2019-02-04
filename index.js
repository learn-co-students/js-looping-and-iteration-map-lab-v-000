// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {
      return name.toLowerCase()
    })
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    let new_name = name.split(" ")

    return Object.assign(
      {},
      {
        "firstName": new_name[0],
        "lastName": new_name[1]
      }
    )
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
