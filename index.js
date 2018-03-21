
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    let fullName = name.split(' ');
      return Object.assign({}, {firstName: fullName[0], lastName: fullName[1]})
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}