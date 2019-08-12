// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(name => name.toLowerCase());
}

function split(name) {
   return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]};
}

function nameToAttributes(list) {
  return list.map(name => split(name));
}

function objectToString(obj) {
  return `${obj.name} is from ${obj.hometown}`;
}

function attributesToPhrase(list) {
  return list.map(obj => objectToString(obj));
}
