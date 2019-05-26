// Code your solution in this file.
function lowerCaseDrivers(arrayOfDrivers) {
  let newDrivers = arrayOfDrivers.map(function (driver) {
    return driver.toLowerCase();
  })
  return newDrivers;
}

function  nameToAttributes(arrayOfDrivers) {
  let newDrivers = arrayOfDrivers.map(driver => {
    const container = {};
    container["firstName"] = driver.split(" ")[0];
    container["lastName"] = driver.split(" ")[1];
    return container;
  })
  return newDrivers;
}

function attributesToPhrase(arrayOfDrivers) {
  let newDrivers = arrayOfDrivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
  return newDrivers;
}
