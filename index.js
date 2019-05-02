// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newDrivers = []
  drivers.map(function (driver){
    newDrivers.push(driver.toLowerCase())
  });
  return newDrivers
}

function nameToAttributes(fullNames) {
  return fullNames.map(function (fullName){
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];

    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(drivers) {
  let list = []
  drivers.map(function (driver) {
    list.push(`${driver.name} is from ${driver.hometown}`);
  });
  return list
}
