// Code your solution in this file.
function lowerCaseDrivers(array) {
  let new_array =[];
  new_array = array.map(x => x.toLowerCase());
  return new_array
}

function nameToAttributes(array) {
  var obj = array.map(function(x) {
	   return{firstName: x.split(' ')[0],
             lastName: x.split(' ')[1]};
           });
  return obj;
}

function attributesToPhrase(array) {
  var new_array = array.map(x => x.name + " is from " + x.hometown);
  return new_array;
}
