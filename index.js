// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowercase = drivers.map(driver => driver.toLowerCase())
  return lowercase
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function (name) {
    arrayName = name.split(" ");
    obj = {};
    obj['firstName'] = arrayName[0];
    obj['lastName'] = arrayName[1];
    return obj
  })
  return newDrivers
}

function attributesToPhrase(drivers) {
  return drivers.map(function (attribute) {
    return `${attribute.name} is from ${attribute.hometown}`
  })
}
