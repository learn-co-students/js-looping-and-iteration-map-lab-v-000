// Code your solution in this file.
function lowerCaseDrivers(ar){
  // - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
  return ar.map((element) => element.toLowerCase())
}
function nameToAttributes(ar){
  // - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.
  return ar.map( function(element) {
    let name = element.split(" ")
    return {firstName: name[0], lastName: name[1]}
  })
}

function attributesToPhrase(ar){
  //- this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"`
  //for each JavaScript object in the array. Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown` object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.
  return ar.map( function(element) {
    return element.name + " is from " + element.hometown
  })
}
