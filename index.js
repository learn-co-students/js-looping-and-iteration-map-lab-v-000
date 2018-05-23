// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(x => x.toLowerCase());
}

function nameToAttributes (drivers) {
 let newDrivers = drivers.map(x => x.split(' '));
  return newDrivers.map(x => {
  newObj = {
  firstName: x[0],
  lastName: x[1]
  }
  return newObj;
})
}

function attributesToPhrase (drivers) {
  return drivers.map(x => `${x.name} is from ${x.hometown}`);
}

  