// Code your solution in this file.

function lowerCaseDrivers(array) {
  const result = array.map(function (e) {return e.toLowerCase() } );
  return result;
}

function nameToAttributes(array) {
  const results = array.map( function (e) {
    newArr = e.split(" ");
    return {firstName: newArr[0], lastName: newArr[1]};
  })
  return results;
}

function attributesToPhrase(array) {
  const results = array.map(function (e) {
    return `${e.name} is from ${e.hometown}`
  });
  return results;
}
