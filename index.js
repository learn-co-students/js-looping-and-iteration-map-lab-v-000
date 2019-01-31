// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(drv) {return drv.toLowerCase()} )  
    }

function nameToAttributes(drivers) {
    return drivers.map(function(drv) {
        let nameArray = drv.split(" ");

        return Object.assign(
            {}, 
            {
                "firstName": nameArray[0],
                "lastName": nameArray[1]
            }
        );
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    });
}