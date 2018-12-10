// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(lower) { return lower.toLowerCase();});
}

function nameToAttributes(array) {
  return array.map(function(combine) {
    let firstName = combine.split(" ")[0];
    let lastName = combine.split(" ")[1];
    return {firstName: firstName, lastName: lastName};
  });
}

function attributesToPhrase(array) {
  return array.map(function(print){
    return( print.name + " is from " + print.hometown);
  })
}
