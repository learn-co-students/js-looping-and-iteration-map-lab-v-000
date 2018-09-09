// Code your solution in this file.

function lowerCaseDrivers (drivers) {
    const reformattedNames = drivers.map(driver => driver.toLowerCase());
    return reformattedNames;
}


function splitName(driver) {
    let fullName = driver.split(" ");
    return fullName;
}


function nameToAttributes (drivers) {
    const newDrivers = drivers.map(driver => Object.assign({}, {firstName: splitName(driver)[0], lastName: splitName(driver)[1]}));
    return newDrivers;
}


function attributesToPhrase (drivers) {
    const fromWhereArray = drivers.map( driver => `${driver.name} is from ${driver.hometown}`);
    return fromWhereArray;
}
