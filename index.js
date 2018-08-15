// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(function (driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(collection) {
  return collection.map(function (driver) {
    let driverSplit = driver.split(" ")
    return Object.assign({firstName: driverSplit[0], lastName: driverSplit[1]});
  })
}

function attributesToPhrase(collection) {
    return collection.map(function (driver) {
      return `${driver.name} is from ${driver.hometown}`
    })
}

// 'Bobby is from Pittsburgh'
