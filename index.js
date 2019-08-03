// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (element) { return element.toLowerCase(); })
};

function nameToAttributes(array) {
  return array.map(function(element) {
    let words = element.split(" ");

    return { firstName: words[0], lastName: words[1] }
  })
};

function attributesToPhrase(array) {
  return array.map(function(element) {
    return `${element.name} is from ${element.hometown}`
  })
};
