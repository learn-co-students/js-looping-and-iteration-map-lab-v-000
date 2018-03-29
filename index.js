function lowerCaseDrivers (drivers) {
    return drivers.map (function (driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map (function (driver) {
        let newObj = {}
        newObj["firstName"] = driver.split(" ")[0];
        newObj["lastName"] = driver.split(" ")[1];
        return newObj;
    })
}

function attributesToPhrase(drivers) {
    return drivers.map (function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}