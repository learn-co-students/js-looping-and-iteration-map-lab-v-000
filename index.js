// Code your solution in this file.
function lowerCaseDrivers (array) {
  const lowerCased = array.map(function (name) {
    return name.toLowerCase();
  });
  return lowerCased;
}

function nameToAttributes (array) {
  const objects = array.map(function (name) {
    let nameArray = name.split(" ");
    return Object.assign({}, { ['firstName']: nameArray[0], ['lastName']: nameArray[1] });
  });
  return objects;
}

function attributesToPhrase (array) {
  const statements = array.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return statements;
}
