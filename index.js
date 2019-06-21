// Code your solution in this file.

function lowerCaseDrivers(array) {
    return array.map(driver => driver.toLowerCase());
}

function nameToAttributes(array) {
    return array.map(function(driver) {
        const splits = driver.split(" ");
        return { firstName: splits[0], lastName: splits[1] };
    });
}

function attributesToPhrase(array) {
    return array.map(driver => `${driver.name} is from ${driver.hometown}`);
}