// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(driver){
        return driver.toLowerCase();
    })
}

function nameToAttributes(drivers){
    return drivers.map(function(driver){
       const d = driver.split(" ");
       return {firstName: d[0], lastName: d[1]}
    })
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}` ;
    });
}