function lowerCaseDrivers(driversArray){
  return driversArray.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(driversArray) {
  return driversArray.map(function (name) {
    return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]};
  });
}

function attributesToPhrase(driversArray) {
  return driversArray.map(function (person) {
    return `${person.name} is from ${person.hometown}`;
  });
}