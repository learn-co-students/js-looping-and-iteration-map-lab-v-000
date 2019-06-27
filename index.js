function lowerCaseDrivers(drivers) {
  let lower = drivers.map(function(driver) { return driver.toLowerCase()});
  return lower;
}

function nameToAttributes(drivers) {
  const newList = drivers.map(function(driver) { return Object.assign( { firstName: driver.split(' ')[0]}, { lastName: driver.split(' ')[1]} );
  });
  return newList;
}

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`} );
  return phrase;
}
