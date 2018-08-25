// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map(function(element) {return element.toLowerCase();})

}

function nameToAttributes(array){
return array.map(function(element) { let splitElement = element.split(" ");
let firstName = splitElement[0];
let lastName = splitElement[1];
let full = {firstName: firstName, lastName: lastName}
console.log(full);
return full})
}

function attributesToPhrase(array) {
return array.map(function(element){return (`${element.name} is from ${element.hometown}`)})
}
