// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name){
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    let parts = name.split(" ");
    let firstName = parts[0];
    let lastName = (parts.length > 1 ? parts[1] : "");
    return {
      firstName: firstName,
      lastName: lastName
    };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
