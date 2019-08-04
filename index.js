// Code your solution in this file.


function lowerCaseDrivers(arr) {
  let newArr = arr.map(name => name.toLowerCase());
    return newArr;
}

//accept array, split names by space, assign names to a collection with firstName and lastName as keys as their values
function nameToAttributes(arr) {
    return arr.map(function(e) {
      let name = e.split(" ")
        return {firstName: name[0], lastName: name[1]}
      })
}

//accept an array with an object, return a string for each pair saying "[name] is from [hometowm]"
function attributesToPhrase(arr) {
  return arr.map(function(e) {
    return `${e.name} is from ${e.hometown}`
  } )
}
