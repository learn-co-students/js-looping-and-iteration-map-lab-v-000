// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map(function(element) {return element.toLowerCase();})

}

function nameToAttributes(array){
return array.map(function(element) { let splitElement = element.split(" ");
element.firstName = splitElement[0];
element.lastName = splitElement[1];
return element})
}

function attributesToPhrase(array) {
return array.map(function(element) {return "${element.name} is from ${element.hometown}"})
}
