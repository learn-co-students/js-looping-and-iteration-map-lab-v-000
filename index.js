function lowerCaseDrivers(collection) {
  return collection.map(function (driver) {return driver.toLowerCase() })
}

function nameToAttributes(collection) {
  return collection.map(function (driver) {
    const first =  driver.split(" ")[0]
    const last = driver.split(" ")[1]

  return {firstName: first, lastName: last}
  });
}

function attributesToPhrase(collection) {
  return collection.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
