// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {return driver.toLowerCase(); });
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        const name_split = driver.split(" ");
        return Object.assign({}, {firstName: name_split[0]}, {lastName: name_split[1]});
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
    
}