// Code your solution in this file.
function lowerCaseDrivers(array) {
return array.map(function(name) {
  return name.toLowerCase()
});
}

function nameToAttributes(array) {
   return array.map(function(name){
     let splitName = name.split(" ")
     let first = splitName[0]
     let last = splitName[1]
    return {lastName: last, firstName: first}
  });
}

function attributesToPhrase(array) {
  return array.map(function(name, city){
    return `${name.name} is from ${name.hometown}`
  })
}
