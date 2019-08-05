// returns driver names in lower case
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase();})
}

/* takes first and last name seperated by a space and returns firstName
 and lastName attributes */
function nameToAttributes(drivers) {
  return drivers.map(function (fullName) {
    const firstName = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];

    return {firstName: firstName, lastName: lastName};
  });
}

// converts to list saying the name and where each individual is from
function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
