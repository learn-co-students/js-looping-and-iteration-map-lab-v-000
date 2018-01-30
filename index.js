function lowerCaseDrivers(arr) {
  return arr.map(function (el) {
    return el.toLowerCase();
  })
}

function nameToAttributes(arr) {
  return arr.map(function (el) {
    return Object.assign({}, {firstName: el.split(" ")[0], lastName: el.split(" ")[1]})
  })
}

function attributesToPhrase(arr) {
  return arr.map(function (el) {
    return `${el.name} is from ${el.hometown}`
  })
}