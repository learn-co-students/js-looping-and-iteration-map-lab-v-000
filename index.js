// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(name => name.toLowerCase());
}

function nameToAttributes(list) {
  return list.map(function (name) {
    let space = name.indexOf(' ');
    let first = name.slice(0, space);
    let last = name.slice(space + 1);
    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(list) {
  return list.map(function (index) {
    return `${index.name} is from ${index.hometown}`;
  });
}
