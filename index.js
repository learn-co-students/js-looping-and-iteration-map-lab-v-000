// Code your solution in this file.
// function lowerCaseDrivers(drivers) {
//  const lowercasedrivers = Array.from(drivers, name => name.toLowerCase())
//  return lowercasedrivers
// }

function lowerCaseDrivers(drivers) {
  const lowercasedrivers = drivers.map(
    function (name) {
    return name.toLowerCase()
    } )
  return lowercasedrivers
}

function nameToAttributes(array) {
  const newobject = array.map( function (name) {
  return Object.assign({}, {
  firstName: name.split(' ')[0]}, {lastName: name.split(' ')[1]})
  })
  return newobject
}

function attributesToPhrase(array) {
  const newarray = array.map(function createPhrase(element) {
    return `${element.name} is from ${element.hometown}`
  })
  return newarray
}
