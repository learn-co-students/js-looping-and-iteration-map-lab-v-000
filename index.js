// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(name => `${name.toLowerCase()}`);
}

function nameToAttributes(array) {
    // return array.map(driver => driver['firstName'] + ' ' + driver.lastName);
    return array.map(function(driver) {
         return Object.assign({ firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]})
        }
    )
}

function attributesToPhrase(array) {
    return array.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
        }
    )
}