// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let lowerCased = drivers.map(driver => driver.toLowerCase())
  return lowerCased
};

function nameToAttributes(drivers) {
  let driverObject = drivers.map( element =>  { return { firstName: element.split(' ')[0], lastName: element.split(' ')[1] } }  )
  return driverObject;
};

function attributesToPhrase(drivers) {
  let phraseArray = []
  drivers.map( element => phraseArray.push(`${element.name} is from ${element.hometown}`) )
  return phraseArray;
};
