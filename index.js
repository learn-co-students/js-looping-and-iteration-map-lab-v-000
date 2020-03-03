function lowerCaseDrivers(drivers) {
  return drivers.map(e => e.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(e => {
    return { firstName: e.split(' ')[0], lastName: e.split(' ')[1] }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(e => {
    return e.name + ' is from ' + e.hometown;
  })
}