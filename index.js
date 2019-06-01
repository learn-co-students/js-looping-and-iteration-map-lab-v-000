// Code your solution in this file.
function lowerCaseDrivers(drivers) {
   return drivers.map(function (driver){
     return driver.toLowerCase() 
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
       const driverFullName = driver.split(' ')
        return { firstName: driverFullName[0], lastName: driverFullName[1]}    
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver){
     return `${driver.name} is from ${driver.hometown}`
    });
}