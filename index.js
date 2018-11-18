// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function (driver) {
    let splitName = driver.split(" ");
    return { firstName: splitName[0], lastName: splitName[1] };
  });
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}