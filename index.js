// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lcDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return lcDrivers;
}

function nameToAttributes(drivers) {
  const nameDrivers = drivers.map(function(name) {
    const first = name.split(" ")[0];
    const last = name.split(" ")[1];
    return {
      firstName: first,
      lastName: last
    };
  });
  return nameDrivers;
}

 function attributesToPhrase(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newDrivers;
}