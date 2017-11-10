// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    let lowerCaseDrivers = drivers.map(driver => driver.toLowerCase());

    return lowerCaseDrivers;
}

function nameToAttributes(drivers) {
    let attributedNames = [];
    drivers.map(function(driver) {
        let driverName = {};
        driverName["firstName"] = driver.split(" ")[0];
        driverName["lastName"] = driver.split(" ")[1];
        attributedNames.push(driverName);
    });
    return attributedNames;
}

function attributesToPhrase(drivers) {
    let driverHomeTown = drivers.map(
        driver => `${driver.name} is from ${driver.hometown}`
    );
    return driverHomeTown;
}
