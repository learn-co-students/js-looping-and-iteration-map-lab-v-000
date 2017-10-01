// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(element) {
    const name = element.split(" ");
    let elementFirst = name[0];
    let elementSecond = name[1];

    return { firstName: elementFirst, lastName: elementSecond };
  });
}

function attributesToPhrase(array) {
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`
  });
}
