// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newDrivers = array.map(function(name){ return name.toLowerCase();});
	return newDrivers;
}

function nameToAttributes(array) {
  const names = array.map(function(name){
  return Object.assign({}, {firstName: `${name.split(" ")[0]}`, lastName: `${name.split(" ")[1]}`});
  });
  return names;
}

function attributesToPhrase(array) {
  const phrases = array.map(function(object) { return `${object.name} is from ${object.hometown}`}); 
  return phrases;
}
