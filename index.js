function lowerCaseDrivers(collection) {
  return collection.map(function (name) { return name.toLowerCase() })
}

function nameToAttributes(collection) {
  return collection.map(function (name) {
    let fullName = name.split(' ');
    return Object.assign({}, {firstName: fullName[0], lastName: fullName[1]})
  })
}

function attributesToPhrase(collection) {
  return collection.map(function (element) {
    return `${element.name} is from ${element.hometown}`
  })
}
