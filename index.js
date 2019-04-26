// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(_name) {
    return _name.toLowerCase()})
}

function nameToAttributes(list) {
  return list.map(function (fullName) {
    return { firstName: fullName.split(' ')[0], lastName: fullName.split(' ')[1] };
  });
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
