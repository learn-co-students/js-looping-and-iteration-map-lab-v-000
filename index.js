function lowerCaseDrivers(drivers) {
  return drivers.map(d => d.toLowerCase() );
}

function nameToAttributes(drivers) {
  return drivers.map(d => Object.assign({}, {firstName: d.split(" ")[0]}, {lastName: d.split(" ")[1]}))
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`)
}
