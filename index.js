// Code your solution in this file
function lowerCaseDrivers(drivers) {
  return drivers.map(function (element) { return element.toLowerCase(); })
}

function nameToAttributes(drivers){
  return drivers.map(function(element){ 
    let words = element.split(" ");
    
   return { firstName: words[0], lastName: words[1] }
     })
}

function attributesToPhrase(drivers){
  return drivers.map(function(element){
    return element.name + ` is from ` + element.hometown
  })
  
}