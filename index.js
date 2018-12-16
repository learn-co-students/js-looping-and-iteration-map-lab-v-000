// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(element) { return element.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    let splitFirstName = name.split(" ")[0];
    let splitLastName = name.split(" ")[1];
    debugger
    return Object.assign({},{firstName: `${splitFirstName}`, lastName:`${splitLastName}`});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
