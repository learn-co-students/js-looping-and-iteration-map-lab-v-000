// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(lowerCaseDrivers) {
        return lowerCaseDrivers.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function(driverNames) {
        const first = driverNames.split(' ')[0];
        const last = driverNames.split(' ')[1];
            return {firstName: first, lastName: last};
    }); 
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return driver.name + " is from " + driver.hometown;
        })
}



 