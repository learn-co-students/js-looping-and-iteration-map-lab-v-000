// Code your solution in this file.

let drivers;

function lowerCaseDrivers(array) {
    const lowerCaseDrivers = array.map(function(driver) { return driver.toLowerCase()});
    return lowerCaseDrivers;
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        const driverFirstName = driver.split(' ')[0];
        const driverLastName = driver.split(' ')[1];
        return { firstName: driverFirstName, lastName: driverLastName };
      });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        const firstName = driver.name;
        const hometown = driver.hometown;
        return(`${firstName} is from ${hometown}`);
    });
}
