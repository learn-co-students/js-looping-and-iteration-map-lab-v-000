// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const driversLowerCase = drivers.map(dr => dr.toLowerCase());
  return driversLowerCase;
}

function nameToAttributes(drivers) {
    const driverObjects = drivers.map(function(names){
    const firstName = names.slice(0, names.indexOf(' '));
    const lastName = names.slice(names.indexOf(' ')+1, names.length);
    return {firstName: firstName, lastName: lastName};
  });
  return driverObjects;
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`);
}
