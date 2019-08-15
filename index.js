// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(element){return element.toLowerCase()})
}

function nameToAttributes(drivers){
  return drivers.map(
    function(element){
      let name = element.split(" ")
      let obj = new Object()
      obj.firstName = name[0]
      obj.lastName = name[1]
      return obj
    })
}

function attributesToPhrase(drivers){
  return drivers.map(function(element){return `${element.name} is from ${element.hometown}`})
}
