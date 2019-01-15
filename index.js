// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lowerCase = drivers.map(function(name) {
  return name.toLowerCase();
  });
  return lowerCase;
}

function nameToAttributes(names) {
  const newArr = names.map(function(name) {
    let newNames = name.split(" ");
    return Object.assign({}, { ['firstName']: newNames[0], ['lastName']: newNames[1]});
  });
  return newArr;
}

function attributesToPhrase() {

}

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrase;
}