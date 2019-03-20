// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(s => s.toLowerCase());
}


function nameToAttributes(drivers) {

  function splitName(n) {
    let nameArray = n.split(" ");
    return { firstName: `${nameArray[0]}` , lastName: `${nameArray[1]}` }
  }

  return drivers.map(splitName);
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`);
}
