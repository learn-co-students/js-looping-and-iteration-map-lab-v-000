// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const newDrivers = drivers.map(function (driver) {return driver.toLowerCase();});
    return newDrivers;
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        const newDrivers = driver.split(" ");
        const objDrivers = {firstName: newDrivers[0], lastName: newDrivers[1]};
        return objDrivers;
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
}
