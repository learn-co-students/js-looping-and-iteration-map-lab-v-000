// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map((element) => element.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map((element) => {
    let name = element.split(" ");
    return {"firstName": name[0], "lastName": name[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map((element) => `${element.name} is from ${element.hometown}`);
}
