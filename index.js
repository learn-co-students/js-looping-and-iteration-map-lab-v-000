// Code your solution in this file.


function lowerCaseDrivers (drivers) {
    return drivers.map(function(driver) {
      return driver.toLowerCase();
   });
}

function nameToAttributes(drivers) {

  const newDrivers = drivers.map(function(driver) {
      driver = driver.split(" ");
      return Object.assign({firstName: driver[0]}, {lastName: driver[1]})
    });

  return newDrivers;
}


function attributesToPhrase(drivers) {

  const driverAttributes = drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    });

  return driverAttributes;
}


/*
const newEngineers = map(oldAccounts, function(account) {
    return Object.assign({}, account, { accessLevel: 'admin' });
});

const equippedEngineers = newEngineers.map(function(eng) {
    return Object.assign({}, eng, { equipment: 'Laptop' });
});

const userIDs = map(newEngineers, function(eng) {
    return eng.userID;
});

userIDs;
// => [15, 63, 97, 12, 44]

*/
