// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map( function (driver) {
    return driver.toLowerCase();
  });

}

function nameToAttributes (drivers) {


  return drivers.map( function (driver) {
    let i = 0;
    while (i < driver.length) {
      if (driver[i] === " ") {
        break;
      }
      i++;
    }

    return Object.assign({}, { firstName: driver.slice(0,i) }, { lastName: driver.slice(i+1) });

  })
}

function attributesToPhrase (drivers) {
  return drivers.map( function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });

}
