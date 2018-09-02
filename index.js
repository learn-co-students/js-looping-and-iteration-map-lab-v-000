// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newArr = drivers.map(driver => driver.toLowerCase());
    return newArr
}

function nameToAttributes(drivers) {
  return drivers.map( function (driver) {
    names = driver.split(" ")
    return Object.assign({}, {firstName: names[0]}, {lastName: names[1]})
  });
}

function attributesToPhrase(drivers) {
  return drivers.map( function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
