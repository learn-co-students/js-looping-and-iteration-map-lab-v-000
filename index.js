// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function(driver) {return driver.toLowerCase();});
  return lcDrivers;
}

function splitName(name) {
  splName = name.split(" ");
  return Object.assign({firstName: splName[0]}, {lastName: splName[1]});
}

function nameToAttributes(names) {
  const namesInAttributes = names.map(function(name) {return splitName(name)});
  return namesInAttributes;
}

function splitAppendAttributes(driver) {
  return `${driver.name} is from ${driver.hometown}`;
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function(driver) {return splitAppendAttributes(driver)});
  return phrases;
}
