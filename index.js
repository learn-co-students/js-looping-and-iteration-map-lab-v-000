// Code your solution in this file.
function lowerCaseDrivers(driversArray) {
    return driversArray.map(function(driver) {
        return driver.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function(fullName) {
        const nameArray = fullName.split(" ");
        return { firstName: nameArray[0], lastName: nameArray[1]}
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}