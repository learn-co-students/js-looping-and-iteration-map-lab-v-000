// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newDrivers = array.map(driver => driver.toLowerCase());
  return newDrivers
}

function nameToAttributes(array) {
  const objects = array.map(function(name) {
    const nameArray = name.split(" ")
    const newObject = {firstName: nameArray[0], lastName: nameArray[1]}
    return newObject
 });
 return objects
}

function attributesToPhrase(array) {
  const list =  array.map(function(object) {
    const phrase = `${object.name} is from ${object.hometown}`
    return phrase
  });
  return list
}
