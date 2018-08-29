// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function(d){
    return d.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
    let name = d.split(" ")
    return {firstName: name[0], lastName: name[1]}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(d){
    return `${d.name} is from ${d.hometown}`
  })
}
