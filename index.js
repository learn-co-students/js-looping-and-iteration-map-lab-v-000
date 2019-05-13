// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    let newDrivers = drivers.map(function (driver) {return driver.toLowerCase();});
    return newDrivers;
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        let newDrivers = driver.split(" ");
        let objDrivers = {firstName: newDrivers[0], lastName: newDrivers[1]};
        return objDrivers;
    });
} 

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
}