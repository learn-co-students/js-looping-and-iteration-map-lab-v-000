function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) { return name.toLowerCase(); });
}

function splitName(name) {
  return name.split(" ");
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) { return {firstName: splitName(name)[0], lastName: splitName(name)[1]} });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (attributes) { return `${attributes.name} is from ${attributes.hometown}` });
}