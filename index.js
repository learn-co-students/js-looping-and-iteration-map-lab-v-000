// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {return name.toLowerCase();});
}

function nameToAttributes (drivers) {
  return drivers.map(function(element) {
    let name = element.split(' ');
    return {firstName: name[0], lastName: name[1]};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(element) {return `${element.name} is from ${element.hometown}`;});

}

for (const name of drivers) {
  newDrivers.push(callback(element));
}
