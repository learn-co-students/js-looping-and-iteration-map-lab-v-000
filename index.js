// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const newList = driver.split(" ");
    return {"firstName": `${newList[0]}`, "lastName": `${newList[1]}`}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
