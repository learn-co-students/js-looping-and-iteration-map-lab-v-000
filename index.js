// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    nameArray = name.split(' ');
    return Object.assign({}, {firstName: nameArray[0]}, {lastName: nameArray[1]} );
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (person) {
    return `${person.name} is from ${person.hometown}`;
  });
}