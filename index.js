// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  return lcDrivers;
}

function nameToAttributes(drivers) {
  const nameDrivers = drivers.map(function (driver) {
    const first = driver.split(' ').shift();
    const last = driver.split(' ').pop();
    return {firstName: first, lastName: last};
  });
  return nameDrivers;
}

function attributesToPhrase(drivers) {
  const phraseDrivers = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phraseDrivers;
}
