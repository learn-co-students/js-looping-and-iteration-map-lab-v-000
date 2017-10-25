// Code your solution in this file.
function lowerCaseDrivers (collection) {
  return collection.map(function (name) {
    return name.toLocaleLowerCase();
  });
}

function nameToAttributes (collection) {
  return collection.map(function (name) {
    const nameFirst = name.split(' ')[0];
    const nameLast = name.split(' ')[1];
    return { firstName: nameFirst, lastName: nameLast }
  });
}

function attributesToPhrase (collection) {
  return collection.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
