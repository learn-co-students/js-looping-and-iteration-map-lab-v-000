// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (lowercase) {return lowercase.toLowerCase();});
}

function nameToAttributes(drivers) {
  return drivers.map(function (i){
    const first = i.split(" ")[0];
    const last = i.split(" ")[1];
    return { firstName: first, lastName: last};
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (i) {
    return `${i.name} is from ${i.hometown}`;
  })
}
