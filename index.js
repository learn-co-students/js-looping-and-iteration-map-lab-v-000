function lowerCaseDrivers(drivers) {
  const names = drivers.map( function(name) {
    return name.toLowerCase();
  });
  return names
}

function nameToAttributes(drivers) {
  const names = drivers.map( function(name) {
    const splitName = name.split(' ')
    return Object.assign({},{firstName: splitName[0]},{lastName: splitName[1]})
  })
  return names
}

function attributesToPhrase(drivers) {
  const greetings = drivers.map( function(driverObj) {
    return `${driverObj.name} is from ${driverObj.hometown}`
  })
  return greetings
}
