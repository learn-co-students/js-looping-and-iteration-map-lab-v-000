// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(a => a.toLowerCase());
}

function nameToAttributes(arr) {
  return arr.map(function(a) {
    a = a.split(" ");
    return obj = {
      "firstName": a[0],
      "lastName": a[1]
    };
  })
}

function attributesToPhrase(arr) {
  return arr.map(function(a) {
    return `${a.name} is from ${a.hometown}`
  })
}
