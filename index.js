// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    const lowerCasedDriverNames = drivers.map(function(driver) { return driver.toLowerCase() });
    return lowerCasedDriverNames;
}

function nameToAttributes(drivers) {
    const objectifiedDrivers = drivers.map(function(driver) {
        let driverFirstName = driver.split(" ")[0];
        let driverLastName = driver.split(" ")[1];
        return { firstName: driverFirstName, lastName: driverLastName };
    });
    return objectifiedDrivers;
}

function attributesToPhrase(drivers) {
    const phrase = drivers.map(function(driver) { return `${driver.name} is from ${driver.hometown}`; });
    return phrase;
}