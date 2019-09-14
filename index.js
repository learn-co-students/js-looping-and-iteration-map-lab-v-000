// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    let shortCaseNameDriver = drivers.map(function(driver) {
        return driver.toLowerCase();
    });
    return shortCaseNameDriver;
 }

function nameToAttributes(drivers) {
    return drivers.map(function(driver){
        
        const name = driver.split(' ')
        return { firstName: name[0], lastName: name[1] };
    });
 }

function attributesToPhrase(drivers) {
    return drivers.map(function(driver){

        // const driverInfo = driver.split(' ')
        // let name = driver[0];
        // let hometown = driver[1];

        return `${driver.name} is from ${driver.hometown}`;
    });
}