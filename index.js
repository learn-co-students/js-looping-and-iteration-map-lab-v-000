// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(name => name.toLowerCase());
}

function nameToAttributes(array) {
  return array.map(function(fullName){
    return Object.assign({}, {firstName: fullName.split(" ")[0]}, {lastName: fullName.split(" ")[1]});
  })
}

function attributesToPhrase(array) {
  return array.map(driverObj => `${driverObj.name} is from ${driverObj.hometown}`)
}