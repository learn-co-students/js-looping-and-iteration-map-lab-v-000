// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(el => {return el.toLowerCase()})
}

function nameToAttributes(arr) {
  return arr.map(el => {
    return Object.assign({}, {firstName: el.split(' ')[0], lastName: el.split(' ')[1]})
  })
}

function attributesToPhrase(arr) {
  const arrStrings = []
  arr.map(el => {
    return arrStrings.push(`${el.name} is from ${el.hometown}`)
  })
  debugger
  return arrStrings
}
