// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(d){
    let nameArray = d.split(" ")

    let nameObject = {firstName: nameArray[0], lastName: nameArray[1]}

    return nameObject;
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(d) {
    return `${d.name} is from ${d.hometown}`
  })
}
