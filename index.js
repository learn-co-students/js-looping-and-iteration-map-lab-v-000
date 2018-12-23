// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(x) {return x.toLowerCase()})
}

function nameToAttributes(arr){
  return arr.map(function(x) {
    let names = x.split(' ')
    return Object.assign( {}, {firstName:names[0]}, {lastName:names[1]})
    })
}

function attributesToPhrase(arr){
  return arr.map(function (x) {
    return `${x.name} is from ${x.hometown}`
  })
}
