// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let downcaseDrivers = drivers.map((driver) => {return driver.toLowerCase()});
  return downcaseDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map((driver) => {
    let name = driver.split(" ");
    return {firstName: name[0], lastName: name[1]};
  })
}

function attributesToPhrase(drivers) {
  return drivers.map((driver) => {
    return `${driver["name"]} is from ${driver["hometown"]}`;
  })
}
