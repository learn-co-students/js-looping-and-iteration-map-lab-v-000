// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDriversArr = drivers.map(function(name) {return name.toLowerCase();});
  return newDriversArr;
  }


function nameToAttributes(drivers) {
  const firstAndLastName = drivers.map(function(name) {
   return Object.assign({}, {firstName: name.split(' ')[0], lastName: name.split(' ')[1]})
 });
  return firstAndLastName;
}

function attributesToPhrase(drivers) {
  const attrPhrase = drivers.map(function(attr) {return `${attr["name"]} is from ${attr["hometown"]}`});
  return attrPhrase
}
