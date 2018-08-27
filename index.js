// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(d) {return d.toLowerCase()});
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(d) { return Object.assign({}, { firstName: d.split(" ")[0], lastName: d.split(" ")[1]})
  });
  return newDrivers;
}

function attributesToPhrase(drivers) {
  const newDrivers = drivers.map(function(d) {return `${d.name} is from ${d.hometown}`})
  return newDrivers;
}