// Code your solution in this file.


function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return lcDrivers;
}

function nameToAttributes(drivers) {
  const splitNameObjectDrivers = drivers.map(function(name) {
    const first = name.split(" ")[0];
    const last = name.split(" ")[1];
    return {
      firstName: first,
      lastName: last
    };
  });
  return splitNameObjectDrivers;
}

function attributesToPhrase(drivers) {
  const infoStringDrivers = drivers.map(function(infoString) {
    return `${infoString.name} is from ${infoString.hometown}`;
  });
  return infoStringDrivers;
}