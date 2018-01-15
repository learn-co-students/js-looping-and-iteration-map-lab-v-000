// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(name => name.toLowerCase());
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(name) {
    let arr = name.split(' ')
    return Object.assign({}, { firstName: `${arr[0]}`, lastName: `${arr[1]}` });
  })

  return newDrivers;
}

function attributesToPhrase(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
  
  return newDrivers;
}
