// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map( function(element) {
    return element.toLowerCase();
  })
}

function nameToAttributes(array) {
  return array.map( function(element) {
    const name = element.split(' ');
    return Object.assign({}, { firstName: name[0] }, { lastName: name[1] });
  })
}

function attributesToPhrase(array) {
  return array.map( function(element) {
    return `${element.name} is from ${element.hometown}`;
  })
}
