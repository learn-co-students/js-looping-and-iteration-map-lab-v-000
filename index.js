function lowerCaseDrivers (array) {
  return array.map(function(element) {return element.toLowerCase()});
}

function nameToAttributes(array) {
  return array.map(function(element) {
     nameArray = element.split(" ");
     return Object.assign({},{firstName:nameArray[0], lastName: nameArray[1]});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}