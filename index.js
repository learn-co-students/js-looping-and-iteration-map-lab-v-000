// Code your solution in this file.


function lowerCaseDrivers(drivers) {
    const lowercased = drivers.map(driver => driver.toLowerCase())
    return lowercased
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) { 
        
    const driverFirst = driver.split(' ')[0]; 
    const driverLast = driver.split(' ')[1];
    
    return { firstName: driverFirst, lastName: driverLast };
        
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function (drivers) {
    
    const name = drivers["name"]
    const city = drivers["hometown"]
    
    return `${name} is from ${city}` 
    });
}