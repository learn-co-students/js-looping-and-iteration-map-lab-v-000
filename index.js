// // Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
        debugger
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        var firstName = driver.split(" ")[0]
        var lastName = driver.split(" ")[1]
        return {firstName: firstName, lastName: lastName}
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        var DRIVER = driver.name
        var HOMETOWN = driver.hometown
        return `${DRIVER} is from ${HOMETOWN}`
        
    })
}
