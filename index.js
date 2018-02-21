// Code your solution in this file.
// lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
//does not modify original array
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
};

//so this works, but is perhaps less readable than solution below
function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]};
  });
};

// function nameToAttributes(drivers) {
//   return drivers.map(function (driver) {
//   const firstName = driver.split(" ")[0];
//   const lastName = driver.split(" ")[1];
//
//   return { firstName: firstName, lastName: lastName };
//   //this feels weird though; repeating variable names
// });
// }

// nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, and
// returns an array of JavaScript objects with firstName and lastName attributes.

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    const name = driver.name;
    const hometown = driver.hometown;

    return `${name} is from ${hometown}`;
  });
};

//but this hear is pretty readable as is, so perhaps const declarations are unnecessary
// function attributesToPhrase(drivers) {
//   return drivers.map(function (driver) {
//     return `${driver.name} is from ${driver.hometown}`;
//     // need backtick marks if doing interpolation
//   });
// }

// attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying
// "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we
// are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".
