function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {

  return drivers.map(function (person) {
    fullname = person.split(" ")
    first = fullname[0];
    last = fullname[1];
    return {firstName: first, lastName: last};
  }

}
