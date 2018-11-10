// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(function(item) {
    return item.toLowerCase();
  });
}
function nameToAttributes(list) {
  return list.map(function(item) {
    const first = item.split(" ")[0];
    const last = item.split(" ")[1];
    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(list) {
  return list.map(function(item) {
    return `${item.name} is from ${item.hometown}`
  });
}
