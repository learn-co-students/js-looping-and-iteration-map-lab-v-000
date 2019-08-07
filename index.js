// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  const lowerCasedDrivers = drivers.map( function (driver) {
    return driver.toLowerCase();
  });
  return lowerCasedDrivers;
}

function nameToAttributes (drivers) {
  const driversObject = []
  
  drivers.map( function (driver) {
    let i = 0;
    while (i < driver.length) {
      if (driver[i] === " ") {
        break;
      }
      i++;
    }

    driversObject.push(Object.assign({}, { firstName: driver.slice(0,i) }, { lastName: driver.slice(i+1) }));

  })
  return driversObject;
}

function attributesToPhrase (drivers) {
  const phrases = []
  drivers.map( function (driver) {
    phrases.push(`${driver.name} is from ${driver.hometown}`);
  });
  return phrases;
}
