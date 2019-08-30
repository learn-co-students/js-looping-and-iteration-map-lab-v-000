// Code your solution in this file.
function lowerCaseDrivers (array) {
  let newarray = array.map(function (name) { return name.toLowerCase();});
  return newarray;
}

function nameToAttributes (array) {
  let newarray = array.map(function (name) { let namearray = name.split(" ");
    return {'firstName': namearray[0], 'lastName': namearray[1]};  });
  return newarray;
}

function attributesToPhrase (array) {
  let newarray = array.map(function (element) {return `${element['name']} is from ${element['hometown']}`});
  return newarray;
}
