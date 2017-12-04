function lowerCaseDrivers(drivers) {
    const driverNames = drivers.map(function (driver) {
        return driver.toLowerCase();
      });
    return driverNames;
};

function nameToAttributes(drivers) {
    const attrDrivers = drivers.map(function (driver) {
        driverName = driver.split(" ");
        return Object.assign({}, {firstName: driverName[0], lastName: driverName[1]});
    });
    return attrDrivers;
};

function attributesToPhrase(drivers) {
    const strings = drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
      });
    return strings;
};

// - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".