// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newarr = array.map(function (element) { return element.toLowerCase(); })
  return newarr
}

function nameToAttributes(array) {
 const targetarray = []
 for (const element of array) {
   const name = element.split(" ");
   const fullname = {}
   fullname['firstName'] = name[0]
   fullname['lastName'] = name[1]
   targetarray.push(fullname)
 }
 return targetarray
}

function attributesToPhrase(array) {
  const newarr = array.map(function (element) { return element.name + " is from " + element.hometown})
  return newarr
}