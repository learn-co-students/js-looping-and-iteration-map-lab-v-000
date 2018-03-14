// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const name = driver.split(" ");
    const obj = {
      firstName: name[0],
      lastName: name[1]
    };
    return obj;
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    const name = driver.name;
    const hometown = driver.hometown;
    return `${name} is from ${hometown}`;
  });
}
