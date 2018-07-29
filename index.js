function lowerCaseDrivers(drivers) {
  return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(name =>
    Object.assign({}, { firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  )
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`)
}