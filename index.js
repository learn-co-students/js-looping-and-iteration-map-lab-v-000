// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (element) {
    return element.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function (element) {
    let split = element.split(" ")
    let first = split[0]
    let last = split[1]
    return Object.assign({}, {firstName: first, lastName: last})
  })
}

function attributesToPhrase(array) {
  return array.map(function (element) {
    return `${element.name} is from ${element.hometown}`
  })
}
