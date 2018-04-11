function lowerCaseDrivers (collection) {
  const newCollection = collection.map (function (driver) {
    return driver.toLowerCase()
  });
  return newCollection;
}

function nameToAttributes (collection) {
  const newCollection = collection.map (function (name) {
    const driver = {};
    const nameArray = name.split(" ");
    driver.firstName = nameArray[0];
    driver.lastName = nameArray[1];
    return driver;
  })
  return newCollection;
}

function attributesToPhrase (collection) {
  const newCollection = collection.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  return newCollection
}
