// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(aDriver => {
    let splitName = aDriver.split(" ");
    return Object.assign({},
      {firstName: splitName[0]},
      {lastName: splitName[1]}
    );
  });
 }

 function attributesToPhrase(drivers) {
   return drivers.map(driver => (`${driver.name} is from ${driver.hometown}`));
 }
